import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastAlert = () =>
  toast.success('You are now registered!', {
    position: toast.POSITION.TOP_CENTER,
  });

export const movieAddedAlert = () => {
  toast.success('Movie has been added!', {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const movieDeletedAlert = () => {
  toast.success('Movie has been deleted!', {
    position: toast.POSITION.TOP_CENTER,
  });
};
