import React, { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";



export function AuthProvider({ children }: { children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login() {
        setIsAuthenticated(true)
    };

    function logout() {
        setIsAuthenticated(false)
    }

    const value = useMemo(
        () => ({ isAuthenticated, login, logout}), [isAuthenticated]
    );

    return <AuthContext.Provider value={value}> { children} </AuthContext.Provider>
}

