import { useState } from "react";

const HighOrderComponentForButton = (Component)=>{
    return function  withHoc(props){
        const [count, setcount]= useState(0)

    const increaseCount = ()=>{
        setcount(count+1)
    };

    return<Component count = {count} increaseCount = {increaseCount}/>

    }
    
};
export default HighOrderComponentForButton;