import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import { MainRoutes as Routes } from "./routes/MainRoutes";
import { Global } from "./styles/Global";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <Global />
      <ToastContainer autoClose={3000} />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
