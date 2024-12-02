import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Locations from "./pages/Locations/Location";
import {Menu} from "./pages/Menu/Menu";

function App() {
    return (
        
        <div>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/locations"} element={<Locations/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
            
            </Routes>
        </div>
    )
}
export default App