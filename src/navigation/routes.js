import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../components/home' 
import API from "../components/api";
import App from '../App' 
import Hooks from "../components/Hooks";

// import your route components too
export default function Navigation() {
    return (
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<App />}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/api" element={<API />}/>
         <Route path="/hooks" element={<Hooks/>}/>
         <Route path="*" element={<h2>Page Not Found</h2>}/>
           {/* <Route path="/" element={<App />}/> */}
      </Routes>
    </BrowserRouter>
    )
}
