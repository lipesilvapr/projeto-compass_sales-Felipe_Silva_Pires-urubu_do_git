import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";

export function useAuth() {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user: any) => {
            console.log('got user: ', user);
            if(user){
                setUser(user);
            } else {
                setUser(undefined);
            }
        })
        return unsub;
    },[])

    return {user};
}