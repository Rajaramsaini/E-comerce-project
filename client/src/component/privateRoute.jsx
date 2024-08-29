import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteComponent = ({userCondition, redirectionRoute ="/login"})=>{
   
   
   
   if(!userCondition)
   return<Navigate to = {redirectionRoute} replace/>
   
    return(
        <>
        <Outlet/>
        </>
    )
}

export default PrivateRouteComponent;