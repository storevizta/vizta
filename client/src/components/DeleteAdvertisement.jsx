import { useDeleteAdMutation } from '../features/query/AdsQuery';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const DeleteAdvertisement = ({ adId }) => {
  const [deleteAd] = useDeleteAdMutation();

  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAd(adId)
          .unwrap()
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        navigate('/home');
      }
    });
  };

  return (
    <div className='my-2'>
      <button
        className="text-right btn bg-red-500 text-white font-bold border-transparent"
        onClick={(e) => handleDelete(e)}
      >
        Delete Ad
      </button>
    </div>
  );
};
