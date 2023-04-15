// import { Loading } from '../components/Loading';

// import { Error } from '../components/Error';

// import { useGetUserByIdQuery } from '../features/slices/userSlice';

// export const UserDetail = (userId) => {
//     const {id} = userId;

//     const { data, error, isLoading } = useGetUserByIdQuery(id);

//     if (isLoading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );

//   if (error)
//     return (
//       <div>
//         <Error />
//       </div>
//     );

//      const {name, address, createdAt} = data;

//      const date = createdAt.slice(0,10)

//     return (
//         <div>
//             <p>Seller:</p>
//             <p>{name}</p>
//             <p>{address}</p>
//             <p>Joined in {date}</p>
//         </div>
//     )
// }
