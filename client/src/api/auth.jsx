import axios from 'axios';

const baseUrl = 'http://localhost:3000'; 

export const SignUp = async ({ email, password }) => {
    try {
        const response = await axios.post(`${baseUrl}/api/auth/register`, 
           {email, password},
           {withCredentials: true}
        );

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const Login = async ({ email, password }) => {
    try {
        const logged = await axios.post(`${baseUrl}/api/auth/login`, 
           { email, password}, 
           { withCredentials: true}
        );

        return logged.data;
    } catch (error) {
        throw error.response ? error.response : error;
    }
}
