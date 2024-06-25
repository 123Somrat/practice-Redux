
import { ReactNode  } from "react";
import AuthContext from "../context/authContext";


export default function AuthContextProviders({children}:{children:ReactNode}) {
  return  <AuthContext.Provider value='somrat'>
         {children}
        </AuthContext.Provider>

  
}

