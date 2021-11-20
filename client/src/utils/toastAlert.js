import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastAlert = () =>
  toast.success('You are now registered!', {
    position: toast.POSITION.TOP_CENTER,
  });

export default toastAlert;
