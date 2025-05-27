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