import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [autorisation, setAuthorisation] = useState(null)

    const login = (user,auto) => {
        setUser(user)
        setAuthorisation(auto)
    }

    const logout = () => {
        setUser(null)
        setAuthorisation(0)
    }

    return <AuthContext.Provider value={{user, autorisation, login, logout}}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext)
}