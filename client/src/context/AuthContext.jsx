import React, { createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'

const AuthContext = createContext();
const baseUrl = 'http://localhost:3000'; 

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios.get('http://localhost:3000/api/protected', { withCredentials: true})
            .then(res => {
                setUser(res.data.user);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);
    const logout = async () => {
        try {
            await axios.post(`${baseUrl}/api/auth/logout`, {}, { withCredentials: true });

        } catch (error) {
            console.log(error);
        }  finally {
            setUser(null); 
        }
    }
  return (
    <AuthContext.Provider value = {{user, setUser, logout, loading}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);