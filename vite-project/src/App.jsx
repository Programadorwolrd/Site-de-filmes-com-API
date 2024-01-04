
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div  className="app">
    <Navbar/>
   <h2>Movieeee</h2>
   <Outlet/>
   </div>

  );
}

export default App;