import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import  Navbar  from "./components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {auth}=useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={auth?<Home/>:<Login/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
