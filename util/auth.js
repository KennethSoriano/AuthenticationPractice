import axios from "axios";

const API_KEY = 'AIzaSyA-G-W5LJILnq2uLSdXMlnQgZA2pkXrj_I'

async function createUser(email, password) {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );

    
}