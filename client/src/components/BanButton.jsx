import {useControlleBanMutation } from "../features/query/AdminQuery"
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

export const BanButton = () => {

const [controlleBan] = useControlleBanMutation()

const [banControll, setBanControll] = useState({
    status: "",
    email: "",
    reason: ""
  })

const handleInputBan = (e) => {
    setBanControll({...banControll, [e.target.name]: e.target.value})
  }

  const onSubmitBan = async (e) => {
    e.preventDefault()
    banControll.status = "Banned"
    try {
      const result = await controlleBan(banControll)
      console.log(result)
      swal("User has Banned")
    } catch (error) {
      console.error(error)
      swal("Error", error.message, "error")
    }
  }
return (
    <form className="flex flex-col w-100 items-center gap-4" onSubmit={onSubmitBan}>
      <label>
        Email:
        <input className="input w-full"
          type="email"
          name="email"
          value={banControll.email}
          onChange={handleInputBan}
        />
      </label>
      <label>
        Reason:
        <input className="input w-full"
          type="text"
          name="reason"
          value={banControll.reason}
          onChange={handleInputBan}
        />
      </label>
      <button onSubmit={onSubmitBan} type="submit" className="btn btn-error w-24 text-xs">Ban User</button>
    </form>
  );
}

