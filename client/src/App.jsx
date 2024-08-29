import { useEffect } from "react"
 import axios from "axios";
import "./app.css";
import HomePage from "./component/homepage";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPage from "./component/loginPage";
import RegisterForm from "./component/registerForm";
import SellerProductPage from "./component/seller-product-page";
import AddNewProduct from "./component/addNewProduct";
import NotFound from "./component/pagenotfound";
import PrivateRouteComponent from "./component/privateRoute";
import secureLocalStorage from "react-secure-storage";
import { SELLER_ROLE } from "./constants/userRole";
import LearningHoc from "./learning-hoc";
import CartPage from "./component/Cartpage";
function App(){

 useEffect(()=>{
  const fetchProductData = async()=>{
    let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product`);
     console.log(res.data);
  };
  fetchProductData();
 },[]);

 const userRole = secureLocalStorage.getItem
  
  return (
    <>

    {/* <Header/> */}
    <BrowserRouter>
    
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<LoginPage/>} path="/login"/>
      <Route element={<RegisterForm/>} path="/register"/>
      <Route element={<LearningHoc/>} path="/learning"/>
      
    <Route element={<PrivateRouteComponent userCondition={userRole == SELLER_ROLE}/>}>
    <Route element={<SellerProductPage/>} path="/seller/product"/>
      <Route element={<AddNewProduct/>} path="/seller/product/add"/>
      <Route element={<AddNewProduct/>} path="/seller/product/edit/:productId"/>

    </Route>
    <Route element={<CartPage/>}  path="/cart"/>
 

    <Route path="*" element={<NotFound/>} />
    </Routes>
    
    </BrowserRouter>
  
    
    
    </>
  )
}

export default App
