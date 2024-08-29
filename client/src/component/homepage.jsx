import ProductList from "./productList";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Header from "./header";
import { BACKEND_URL } from "../constants/routes";



const HomePage = () => {
    const [productsData, setProductsData] = useState([]);
      //  let result = [];
    const getProductsData = async () => {
      let token = Cookies.get("authToken");
       console.log("authToken",token);

      const res =   await axios.get(`${BACKEND_URL}/product`,
      {
         headers:{
         Authorization: token,}
      }
      );
  
        // const result = await res.json();
       setProductsData(res.data);
    };
  
    useEffect(() => {
      getProductsData();
    }, []);

    // if(!productsData){
    //     return<>
    //         Loading...s
    //     </>
    // }
    return (
      <>
        {/* <Navbar /> */}
        <Header/>
  
         <ProductList productsData={productsData} /> 
      </>
    );
  };
  
  export default HomePage;