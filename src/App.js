import { BrowserRouter, Route, NavLink, Routes, Navigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";

import "./App.css";
import Events from "./pages/Events";
import Athletes from "./pages/Athletes/Athletes";
import Home from "./Home/Home";
import About from "./About/About";
import History from "./History/History";
import Detail from "./pages/Detail/Detail";
import DetailEvents from "./pages/Detail/DetailEvents";
function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">UFC</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/events" element={<Events />}></Route>
        <Route path="/athletes" element={<Athletes />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/History" element={<History />}></Route>
        <Route path="/Athletes/detail" element={<Detail />}></Route>
        <Route path="/Events/detailevents" element={<DetailEvents />}></Route>
        </Routes>
        <footer>
        <NavLink to="/Home" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/events" className="iconWrapper">
          <HiHome className="icon" />
          Events
        </NavLink>
        <NavLink to="/Athletes" className="iconWrapper">
          <MdGroup className="icon" />
          Athletes
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <MdGroup className="icon" />
          About
        </NavLink>
        <NavLink to="/History" className="iconWrapper">
          <MdGroup className="icon" />
          History
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;