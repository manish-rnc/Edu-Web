import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // upon succesfull verification 
        navigate('/tutor');
    };

    return (
        <>
            <div className="absolute"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1
                    }}>
                    <img
                        src={"https://static.vecteezy.com/system/resources/previews/007/039/559/non_2x/businessman-holding-virtual-human-icon-for-focus-customer-group-or-human-recruitment-and-development-concept-free-photo.jpg"}
                        alt="background image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
            </div>
            <form
                    onSubmit={handleLogin}
                    className='w-[425px] absolute p-12 bg-black my-24 mx-auto left-0 right-0 text-white rounded-md bg-opacity-85'
                >
                    <input
                        ref={emailRef}
                        type='text'
                        placeholder='Enter email'
                        className='p-3 my-3 w-full border rounded-md bg-transparent'
                    />
                    <input
                        ref={passwordRef}
                        type='password'
                        placeholder='Enter password'
                        className='p-3 my-3 w-full border rounded-md bg-transparent'
                    />
                    <p className='text-red-600'>{errorMessage}</p>
                    <button
                        type='submit'
                        className="p-3 my-4 w-full rounded-md font-semibold"
                        style={{ backgroundColor: "blue" }}
                    >
                        Sign In
                    </button>
                </form>
        </>
    )
}   

export default Login;
