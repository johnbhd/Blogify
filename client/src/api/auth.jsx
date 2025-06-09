import axios from 'axios';

const baseUrl = 'http://localhost:3000'; 

export const SignUp = async ({ email, password }) => {
    try {
        const response = await axios.post(`${baseUrl}/api/auth/register`, {
            email,
            password
        });

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const Login = async ({ email, password }) => {
    try {
        const logged = await axios.post(`${baseUrl}/api/auth/login`, {
            email,
            password
        });

        return logged.data;
    } catch (error) {
        throw error.response ? error.response : error;
    }
}

export const Logout = async () => {
    try {
        const logout = await axios.post(`${baseUrl}/api/auth/logout`, {}, { withCredentials: true});
    
        return logout.data;
    } catch (error) {
        console.log(error);
    }
}