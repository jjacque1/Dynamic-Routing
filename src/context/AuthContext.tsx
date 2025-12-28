import { useContext, createContext } from "react";

type AuthContextValue = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be useed inside <AuthProvider />");
    }

    return context;
}