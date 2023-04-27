import {useGetAdByIdQuery} from "../features/query/AdsQuery"
import {useGetUserIdQuery} from "../features/query/UserQuery"

export const ReportsCards = ({info}) => {
    
    const ad  = useGetAdByIdQuery(info.AdId)
    const user = useGetUserIdQuery(info.UserId)
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
                        <button className="btn btn-error w-24 text-xs">Ban</button>
                        <button className="btn btn-success w-24 text-xs">No Ban</button>
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
                    <button className="btn btn-error w-24 text-xs">Banear</button>
                    <button className="btn btn-success w-24 text-xs">No banear</button>
                    <button className="btn btn-info w-24 text-xs">Review</button>
                </div>
            </div>
            }
        </div>
    )
}