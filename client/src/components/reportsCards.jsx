import {useGetAdByIdQuery} from "../features/query/AdsQuery"
import {useGetUserIdQuery} from "../features/query/UserQuery"
import {AdminDeleteAd} from '../components/AdminDeleteAd'
import {useControlleBanMutation } from "../features/query/AdminQuery"
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

export const ReportsCards = ({info}) => {
const ad  = useGetAdByIdQuery(info.AdId)
const user = useGetUserIdQuery(info.UserId)

const [controlleBan] = useControlleBanMutation()

const [banControll, setBanControll] = useState({
    status: "",
    email: user?.data?.email,
    reason: ""
  })


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

    return(
        <div className="w-140 h-44 bg-gray-600 m-5 rounded">
            {info.AdId ? (
                <div className="flex gap-2 items-center">
                    <img className="w-44 h-44 p-2 rounded-xl object-cover" src={ad?.data?.image[0]} alt="ReportImage"/>
                    <div className="w-90">
                        <h3 className="text-2xl pt-1">{ad?.data?.title}</h3>
                        <div className="pt-5">
                            <div className="flex text gap-2 text-xs">
                                <label>Reason:</label>
                                <p>{info.reason}</p>
                            </div>
                            <div className="divider m-0"></div> 
                            <div className="flex text gap-2 text-xs">
                                <label>Ad reported id:</label>
                                <p>{info.AdId}</p>
                            </div>
                            <div className="divider m-0"></div> 
                            <div className="flex text gap-2 text-xs">
                                <label>User reported id:</label>
                                <p>{info.UserId}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                    <AdminDeleteAd adId={info.AdId} />
                        <button className="btn btn-info w-24 text-xs">Review</button>
                    </div>
                </div>
            ): 
            <div className="flex items-center gap-2">
                <img className="w-44 h-44 p-2 rounded-xl" src={user?.data?.picture} alt="ReportImage"/>
                <div className="p-2 w-90">
                    <h3 className="text-2xl mb-2">User Reported</h3>
                    <div className="flex text gap-2 text-xs">
                        <label>Nickname:</label>
                        <h3>{user?.data?.nickname}</h3>
                    </div>
                    <div className="divider m-0"></div> 
                    <div className="flex text gap-2 text-xs">
                        <label>Email:</label>
                        <p>{user?.data?.email}</p>
                    </div>
                    <div className="divider m-0"></div> 
                    <div className="flex text gap-2 text-xs">
                        <label>Reason:</label>
                        <p>{info.reason}</p>
                    </div>
                    <div className="divider m-0"></div> 
                    <div className="flex text gap-2 text-xs">
                        <label>User reported id:</label>
                        <p>{info.UserId}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <form onSubmit={onSubmitBan}>
                    <button type="submit" className="btn btn-error w-24 text-xs">Ban User</button>
                    </form>
                <form onSubmit={onSubmitUnBan}>
                <button  className="btn btn-success w-24 text-xs" type="submit">Unban User</button>
                </form>
                
                    <button className="btn btn-info w-24 text-xs">Review</button>
                </div>
            </div>
            }
        </div>
    )
}