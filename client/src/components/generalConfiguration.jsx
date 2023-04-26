import { useDispatch } from "react-redux"
import { useUpdateUserMutation } from "../features/query/UserQuery"
import { useState } from "react"
import {useGetUserIdQuery} from "../features/query/UserQuery"
import swal from 'sweetalert';

export const Configuration = ({info}) => {
    
    const dispatch = useDispatch()

    const userData = useGetUserIdQuery(info.sub)

    const [data, setData] = useState({
        name: userData.data.name,
        nickname: userData.data.nickname,
        picture: userData.data.picture,
        phone: userData.data.phone
    })

    const [address, setAddress] = useState(info.address)

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
            picture: data.picture,
            address: address,
            phone: data.phone
        }))
    }

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
                <input className="input w-full flex m-auto" name="picture" value={data.picture} onChange={handleInput} placeholder={`${info.picture}`}></input>
            </div>
            <div className="flex flex-col items-center gap-5">
                <input className="file-input w-full max-w-xs" type="file" name="picture" onChange={handleInput} placeholder={`${info.picture}`}></input>
                <img src={`${info.picture}`} alt="Profile photo" />
            </div>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Address</label>
                <input className="input w-full" name="address" value={data.address} onChange={handleInput} placeholder={`${info.address}`}></input>
            </div>
            <div className="flex items-center w-150 gap-5">
                <label className="w-24">Phone</label>
                <input className="input w-full" name="phone" value={data.phone} onChange={handleInput} placeholder={`${info.phone}`}></input>
            </div>
            <button type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e)}>Update</button>
        </div>
    )
}