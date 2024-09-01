import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { currentUser } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const UserRoute = ({children} : {children : ReactNode}) => {
    const user=   useAppSelector(currentUser)
    const isUser = user?.role === "user";
    if(!isUser){
      return <Navigate to={'/login'} replace={true}/>
    }
      return children
};

export default UserRoute;