import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Auth = () => {
   const auth = useContext(AuthContext);

   return auth;
};

export default Auth;