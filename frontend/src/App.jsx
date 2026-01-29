import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
