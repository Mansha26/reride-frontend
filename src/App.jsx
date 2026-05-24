import './App.css'
import CustomRouter from './router/CustomRouter'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <CustomRouter/>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default App
