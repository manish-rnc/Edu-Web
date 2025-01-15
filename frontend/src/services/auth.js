export const RegisterUser = async (name, email, password, userType) => {
    try {
        const API_URL = `${process.env.API_URL}/auth/register`;
        const requestData = {
            name,
            email,
            password,
            userType,
        };
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
            credentials: "include",
        });
        if (response.code == '200') {
            const data = await response.json();
            return data;
        }
        else {
            localStorage.removeItem('user_data');
            window.location.replace('/');
        }
    }
    catch (error) {
        console.error('API Request Error : ', error);
        throw error;
    }
};

export const LoginUser = async (email, password) => {
    try {
        const API_URL = `${process.env.API_URL}/auth/login`;
        const requestData = {
            email,
            password,
        };
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
            credentials: "include",
        });
        if (response.code == '200') {
            const data = await response.json();
            return data;
        }
        else {
            localStorage.removeItem('user_data');
            window.location.replace('/');
        }
    }
    catch (error) {
        console.error('API Request Error : ', error);
        throw error;
    }
};