import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";

import Brightness7Icon from "@mui/icons-material/Brightness7";
 import { ThemeContext } from "../theme";
import secureLocalStorage from "react-secure-storage";
import { ADMIN_ROLE, SELLER_ROLE } from "../constants/userRole";
import {Link}   from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

  const productsInCart = useSelector((state)=>state.cart.products)

let contofProduct = productsInCart;
console.log("count", contofProduct);


   const {toggleTheme,isDarkMode}  = useContext(ThemeContext);
const userRole =secureLocalStorage.getItem("userRole");
// console.log("userRole",userRole);
  return (
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>

          My E-Commerce App

          </Link>
          </Typography>

        {userRole==SELLER_ROLE &&(
          <>{" "}

          <Button color="inherit" component={Link} to="/seller/product">
          Product</Button>
          
          </>
        )}
        
        <Button color="inherit" component={Link} to="/Order">
          Order</Button>

          <Badge badgeContent={productsInCart.length} color="secondary">
  

        
          <Button color="inherit" component={Link} to="/cart">
          Cart 
          </Button>
          </Badge>

          {userRole==ADMIN_ROLE &&(
            <>{" "}
             <Button color="inherit" component={Link} to="/all users">
          All Users</Button>

            </>
          )}
        <IconButton color="inherit" onClick={toggleTheme} edge="end">
          {  <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;