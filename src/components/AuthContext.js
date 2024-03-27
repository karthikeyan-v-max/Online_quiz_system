import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect,useState } from "react";
import auth from "../firebaseconfig/firebase";

export const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser , setCurrentUser] = useState(null)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            if (user){
                setCurrentUser(user);
                return
            }
            setCurrentUser(null)
            console.log(user)
        })

        return () =>{
            unsub();
        }
    },[]);
    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
}

