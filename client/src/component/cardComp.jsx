


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from '../store/actions/productActions';
export default function CardComponent({product}) {
  
const dispatch = useDispatch()

const productsInCart = useSelector((state)=>state.cart.products)

    function isItemInCart(){
      return productsInCart.some((oneObj) =>oneObj._id == product._id);
      
    } 
    const handleAddToCart = ()=>{
      console.log("the product",product);
      dispatch(setProduct(product))



    }
    return (
      <Card sx={{ maxWidth: 300, 
      padding:"none"}}>

        
        {/* to={`/product/${product.id}`}
        style={{textDecoration:"none", color:"inherit"}} */}
        <CardMedia
          sx={{ height: 140 }}
          // image={product.imageUrl}
          image={"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"}
          title={product.name}
          style={{backgroundSize:"contain", }}
           
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name.split(" ").slice(0,10).join( " ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.split(" ").slice(0, 10).join(" ")}
          </Typography>
        </CardContent> 
        <CardActions>
          <Button size="small">${product.price}</Button>
          {isItemInCart() ? (
            <button size="small" disabled>
              Alrady added
            </button>):

( <Button onClick={handleAddToCart} size="small">ADD TO CART  </Button>)


}


          
          
          
        </CardActions>
      </Card>
    );
  }
  