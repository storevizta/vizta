import {useGetAllReportsQuery} from "../features/query/ReportQuery"
import { ReportsCards } from "./reportsCards"
import {Error} from "./Error"

export const Admin = () => {

  const {data, isError, isLoading}  = useGetAllReportsQuery()

  if(isLoading){
    return(
      <p>Loading...</p>
    )
  }

  if(isError){
    <Error/>
  }

    return(
        <div className='w-200 h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3'>
            <div className="stats shadow bg-gray-600">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>
  
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>
    
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
            <div className="flex items-center h-150 w-200 gap-2 justify-center">
                <div className="bg-gray-600 h-150 w-140 flex flex-col items-center overflow-auto rounded-xl">
                    <h1 className="text-2xl">Admin Actions</h1>
                    <div className="m-5">
                      <h3 className="text-center">Ban a user by Id</h3>
                      <form className="flex flex-col w-100 items-center gap-4">
                        <input type="text" placeholder="User id" className="input w-full" />
                        <input type="text" placeholder="Reason" className="input w-full" />
                        <button className="btn btn-error w-52">Ban</button>
                      </form>
                    </div>
                    <div className="m-5">
                      <h3 className="text-center">Delete an ad by Id</h3>
                      <form className="flex flex-col w-100 items-center gap-4">
                        <input type="text" placeholder="Ad Id" className="input w-full" />
                        <input type="text" placeholder="Reason" className="input w-full" />
                        <button className="btn btn-error w-52">Ban</button>
                      </form>
                    </div>
                    <div className="m-5">
                      <h3 className="text-center">Unban user</h3>
                      <form className="flex flex-col w-100 items-center gap-4">
                        <input type="text" placeholder="User Id" className="input w-full" />
                        <input type="text" placeholder="Reason" className="input w-full" />
                        <button className="btn btn-success w-52">Unban</button>
                      </form>
                    </div>
                    <div className="w-100 flex flex-col items-center gap-4 m-5">
                      <h3>Create Category</h3>
                      <input type="text" placeholder="Category name" className="input w-full" />
                      <button className="btn btn-info w-52">Unban</button>
                    </div>
                </div>
                <div className="overflow-auto h-150 w-150 bg-gray-600 rounded-xl">
                  {data.length !== 0 ? 
                  data.map(value => <ReportsCards info={value}/>) 
                  : <p>No reports yet</p> 
                }
                </div>
            </div>
        </div>
    )
}