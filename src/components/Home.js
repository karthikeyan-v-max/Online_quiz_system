import { signOut } from 'firebase/auth'
import React from 'react'
import auth from '../firebaseconfig/firebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    signOut(auth)
    navigate("/login")
    
  }
  return (
    <div>WELCOME!!!!!!
      <button
        onClick={()=>handleClick()}
      >
        Logout
      </button>
    </div>
  )
}

export default Home