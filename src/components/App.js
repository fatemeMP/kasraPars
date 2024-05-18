import MainRouter from 'components/MainRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ className }) {
  return (
    <div className={`${className}`}>
      <ToastContainer />
      <MainRouter />
    </div>
  );
}

export default App;
