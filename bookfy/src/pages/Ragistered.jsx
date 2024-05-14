import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom'
const Ragistered = () => {
const firebae = useFirebase()

const [email,setemail] = useState("")
const [password,setpassword] = useState("")

const navigate = useNavigate()

useEffect(() =>{
  if(firebae.isLoggedin){
    // navigate that
    navigate('/')
  }
},[firebae,navigate])

const handalesubmit = async(e) => {
  e.preventDefault()
  await firebae.singupUserWithEmailAndPassword(email,password)

}

  return (
    <div className='container mt-5'>
   <Form onSubmit={handalesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) =>{setemail(e.target.value)}} value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => { setpassword(e.target.value)}} value={password}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create Accaunt
      </Button>
    </Form>
    </div>
  )
}

export default Ragistered