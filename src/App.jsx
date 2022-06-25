import React from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
<>
<Router>
    <Routes>
    <Route path="/login" element={<Login />} > </Route>
     </Routes>
</Router>
    
 {admin && (    <>
    <Router>
      
        
 

         
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>





</Routes> 

        </div>
           
     
    </Router>
 </>   
)}


</>
  );
}






export default App;