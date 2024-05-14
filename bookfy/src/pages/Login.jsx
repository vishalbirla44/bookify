import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from "react-router-dom"


const Login = () => {
const firebae = useFirebase()
const navigate = useNavigate()

useEffect(() =>{
  if(firebae.isLoggedin){
    // navigate that
    navigate('/')
  }
},[firebae,navigate])

const [email,setemail] = useState("")
const [password,setpassword] = useState("")

const handalesubmit = async(e) => {
  e.preventDefault()
  await firebae.singinUserWIthEmailAndPassword(email,password)

}

  return (
    <div className='container mt-5'>
   <Form onSubmit={handalesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) =>{setemail(e.target.value)}} value={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => { setpassword(e.target.value)}} value={password}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <h1 className='mt-5 mb-5'> OR</h1>

    <Button variant="danger" onClick={firebae.singinWithGoogle}>Singin with google</Button>
    </div>
  )
}

export default Login