import { useDispatch } from "react-redux"
import { useUpdateUserMutation } from "../features/query/UserQuery"
import { useState } from "react"
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

    const [address, setAddress] = useState([{
        street: "",
        number: ""
    }])

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

    const handleInputAddress = (e, index) => {
        const newAddress = {...address[index], [e.target.name]: e.target.value}
        const oldAddress = [...address]
        oldAddress[index] = newAddress
        setAddress(oldAddress)
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
        dispatch(updateUser({
            id: info.sub,
            name: data.name,
            nickname: data.nickname,
            picture: image,
            address: address,
            phone: data.phone
        }))
    }

    console.log(userData.data.address[0]);

    return (
        <div className="flex flex-col items-center gap-5 w-150" >
            <h3>Here you can change your info</h3>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Name</label>
                <input className="input w-full" name="name" value={data.name} onChange={handleInput} placeholder={`${info.name}`}></input>
            </div>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Nickname</label>
                <input className="input w-full" name="nickname" value={data.nickname} onChange={handleInput} placeholder={`${info.nickname}`}></input>
            </div>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Picture</label>
                <input className="input w-full flex m-auto" name="picture" value={image} onChange={handleInputImage} placeholder={`Image link`}></input>
            </div>
            <div className="flex flex-col items-center gap-5">
                <input className="file-input w-full max-w-xs" type="file" name="picture" onChange={uploadImage} placeholder={`${info.picture}`}></input>
                <img src={`${image}`} alt="Profile photo" />
            </div>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Address</label>
                {userData.data.address ? userData.data.address.map((value, index) => 
                <div>
                    <input className="file-input w-full max-w-xs" type="text" name="street" placeholder={`${userData.data.address[index].street}`} onChange={(e) => modifyAddress(e, index)}></input>
                    <input className="file-input w-full max-w-xs" type="text" name="number" placeholder={`${userData.data.address[index].number}`} onChange={(e) => modifyAddress(e, index)}></input>
                </div>
                ): null}
                {address.map((value, index) => 
                <div>
                    <input className="file-input w-full max-w-xs" type="text" name="street" onChange={(e) => handleInputAddress(e, index)}></input>
                    <input className="file-input w-full max-w-xs" type="text" name="number" onChange={(e) => handleInputAddress(e, index)}></input>
                </div>
                )}
                <button onClick={addAddress}>Add a new Address</button>
            </div>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Phone</label>
                <input className="input w-full" name="phone" value={data.phone} onChange={handleInput} placeholder={`${info.phone}`}></input>
            </div>
            <button type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e)}>Update</button>
        </div>
    )
}