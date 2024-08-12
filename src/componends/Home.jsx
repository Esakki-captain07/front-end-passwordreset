import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import React from 'react'
function Home() {

  const navigate = useNavigate()

const handleSignIn = ()=>{
  navigate("/SignIn")
}

  return<>
  <div className='homeTitle'>
  <h1 >welcome to front-end of password reset click here to sign in</h1>
  <Button variant="primary" onClick={handleSignIn}>sign in</Button>
  </div>
  </>
}

export default Home
