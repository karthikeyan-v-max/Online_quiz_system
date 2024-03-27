import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import 'boxicons'
import '../style/login.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebaseconfig/firebase'

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState(false)
    const navigate = useNavigate();
    const signin = async(e)=>{
        e.preventDefault();
        try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        navigate("/")
        }
        catch(err){
            console.log(err)
            setError(true)
        }
        
    }
  return (
    <div className='body'>
        <div className='wrapper'>
            <form onSubmit={signin}>
                <h1>Signin</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <box-icon type='solid' name='user-circle'></box-icon>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Enter the password' value={password} onChange={(e)=>setPassword(e.target.value)}required/>
                    <box-icon type='solid' name='lock-alt'></box-icon>
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remeber Me</label>
                    {/* <a href='#'>Forgot Password</a> */}
                </div>
                <button type='submit' className='btn'>signin</button>
                <div className='register-link'>
                    <p>Already have an account?<Link to="/login">Login</Link></p>
                </div>
                {error && <h1>Something went wrong</h1>}
            </form>
        </div>
    </div>
  )
}

export default SignIn