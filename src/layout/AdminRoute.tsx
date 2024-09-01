import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { currentUser } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children} : {children : ReactNode}) => {
    const user=   useAppSelector(currentUser)
    const isAdmin = user?.role === "admin";
    if(!isAdmin){
      return <Navigate to={'/login'} replace={true}/>
    }
      return children
};

export default AdminRoute;