import {useControlleBanMutation } from "../features/query/AdminQuery"
import { useEffect, useState } from 'react';
import swal from 'sweetalert';


export const UnBanButton = () => {

    const [controlleBan] = useControlleBanMutation()

    const [banControll, setBanControll] = useState({
        status: "",
        email: "",
        reason: ""
      })
    
    const handleInputBan = (e) => {
        setBanControll({...banControll, [e.target.name]: e.target.value})
      }
    const onSubmitUnBan = async (e) => {
        e.preventDefault()
        banControll.status = "NotBanned"
        try {
          const result = await controlleBan(banControll)
          console.log(result)
          swal("User has been unbanned")
        } catch (error) {
          console.error(error)
          swal("Error", error.message, "error")
        }
      }
      return (
        <form className="flex flex-col w-100 items-center gap-4" onSubmit={onSubmitUnBan}>
          <input className="input w-full" type="text" name="email" placeholder="User email" onChange={handleInputBan} value={banControll.email} required />
          <input className="input w-full" type="text" name="reason" placeholder="Reason" onChange={handleInputBan} value={banControll.reason} required />
          <button className="btn btn-success w-24 text-xs" type="submit">Unban User</button>
        </form>
      )
}

