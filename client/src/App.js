import { Outlet } from "react-router-dom";
import Navbar from "./pages/website/Navbar";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
