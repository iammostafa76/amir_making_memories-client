import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth/useAuth';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const {login} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

    

        try {
            setError('')
            setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to Sign In')
            
        }
        setLoading(false)

        
    }
    return (
        <div class="min-h-screen bg-purple-300 flex justify-center items-center">
        
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
            <h2 class="text-3xl font-bold text-center mb-4 pb-4">Login</h2>
            
            </div>
            {error && <p class="text-red-500 pb-2">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div class="space-y-4">
                <input type="email" placeholder="Email " class="form-control" ref={emailRef} required/>
                <input type="password" placeholder="Password" class="form-control" ref={passwordRef} required/>
                
                </div>
                <div class="text-center mt-6">
                <button disabled={loading} type="submit" class="py-3 w-64 text-md text-white bg-gray-800 rounded-md">Log in</button>
            
                <p class="mt-4 text-sm">Need An Account? <span class="underline cursor-pointer"><Link to="/signup">Sign Up</Link> </span></p>
                </div>
            </form>
        </div>
        
        </div>
    );
};

export default Login;