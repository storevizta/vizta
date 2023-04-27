import { useDispatch } from "react-redux"
import { useUpdateUserMutation } from "../features/query/UserQuery"
import { useEffect ,useState } from "react"
import {useGetUserIdQuery} from "../features/query/UserQuery"
import swal from 'sweetalert';
import { uploadBytes, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { v4 } from 'uuid';

export const Configuration = ({info}) => {
    
    const dispatch = useDispatch()

    const userData = useGetUserIdQuery(info.sub)

    const [image, setImage] = useState(userData.data.picture);
    const [data, setData] = useState({
        name: userData.data.name,
        nickname: userData.data.nickname,
        phone: userData.data.phone
    })

    const [oldAddress, setOldAddress] = useState([])

    const [address, setAddress] = useState([])

    useEffect(() => {
        if(userData.data.address){
            const JSONstring = userData.data.address.map(value => JSON.parse(value))
            setOldAddress(JSONstring)
        }
    }, [])

    
    const uploadImage = async (e) => {
        e.preventDefault();
        const imageUpload = []
        imageUpload.push(e.target.files[0])
        for (let i = 0; i < imageUpload.length; i++) {
            const imageRef = ref(storage, `posts/${imageUpload[i].name + v4()}`);
            await uploadBytes(imageRef, imageUpload[i]).then(async (snaphsot) => {
            await getDownloadURL(snaphsot.ref).then((url) => {
                setImage(url);
            });
        });
        }
    };

    const addAddress = () => {
        setAddress([...address, {
            street: "",
            number: ""
        }])
    }

    const modifyAddress = (e, index) => {
        const newAddress = {...oldAddress[index], [e.target.name]: e.target.value}
        const addresOld = [...oldAddress]
        addresOld[index] = newAddress
        setOldAddress(addresOld)
    }

    const handleInputAddress = (e, index) => {
        const newAddress = {...address[index], [e.target.name]: e.target.value}
        const addresOld = [...address]
        addresOld[index] = newAddress
        setAddress(addresOld)
    }
    
    const handleInputImage = (e) => {
        setImage(e.target.value)
    }

    const handleInput = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    
    const [updateUser] = useUpdateUserMutation()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        swal("User updated")
        const totalAddress = oldAddress.concat(address)
        dispatch(updateUser({
            id: info.sub,
            name: data.name,
            nickname: data.nickname,
            picture: image,
            address: totalAddress,
            phone: data.phone
        }))
    }
    
    return (
        <div className="flex flex-col items-center gap-5 w-170 overflow-auto p-5" >
            <h3>Here you can change your info</h3>
            <div className="flex items-center w-150 gap-5 bg-gray-600 p-10 rounded-xl">
                <label className="w-24">Name</label>
                <input className="input w-full" name="name" value={data.name} onChange={handleInput} placeholder={`${info.name}`}></input>
            </div>
            <div className="flex items-center w-150 gap-5 bg-gray-600 p-10 rounded-xl">
                <label className="w-24">Nickname</label>
                <input className="input w-full" name="nickname" value={data.nickname} onChange={handleInput} placeholder={`${info.nickname}`}></input>
            </div>
            <div className="w-150 bg-gray-600 p-10 rounded-xl flex flex-col gap-5">
                <div className="flex items-center w-full gap-5">
                    <label className="w-24">Picture</label>
                    <input className="input w-full flex m-auto" name="picture" value={image} onChange={handleInputImage} placeholder={`Image link`}></input>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <input className="file-input w-full max-w-xs" type="file" name="picture" onChange={uploadImage} placeholder={`${info.picture}`}></input>
                    <img src={`${image}`} alt="Profile photo" />
                </div>
            </div>
            <div className="flex items-center w-150 gap-5 bg-gray-600 p-10 rounded-xl">
                <label className="w-24">Address</label>
                <div className="flex flex-col gap-5 w-150">
                {oldAddress.length > 0 ? oldAddress.map((value, index) => 
                <div className="flex flex-col gap-2">
                    <input className="file-input w-full" type="text" name="street" placeholder={`${oldAddress[index].street}`} onChange={(e) => modifyAddress(e, index)}></input>
                    <input className="file-input w-full" type="text" name="number" placeholder={`${oldAddress[index].number}`} onChange={(e) => modifyAddress(e, index)}></input>
                </div>
                ): null}
                {address.map((value, index) => 
                    <div className="flex flex-col gap-2">
                        <input className="file-input w-full" type="text" name="street" placeholder="Street name" onChange={(e) => handleInputAddress(e, index)}></input>
                        <input className="file-input w-full" type="text" name="number" placeholder="Street number" onChange={(e) => handleInputAddress(e, index)}></input>
                    </div>
                )}
                <button onClick={addAddress}>Add address</button>
                </div>
            </div>
            <div className="flex items-center w-150 gap-5 bg-gray-600 p-10 rounded-xl">
                <label className="w-24">Phone</label>
                <input className="input w-full" name="phone" value={data.phone} onChange={handleInput} placeholder={`${info.phone}`}></input>
            </div>
            <button type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e)}>Update</button>
        </div>
    )
}