import React from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <Router>
     <Topbar/>
       <div className="container">
        <Sidebar />
         <Routes>
     <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<UserList/>} />




           
         </Routes>
         </div>
    </Router>
  );
}






export default App;