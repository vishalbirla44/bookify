import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';


const Listingpage = () => {

const firebase = useFirebase()

    const [namee,setnamee] = useState("")
    const [price,setprice] = useState("")
    const [stdate,setstdate] = useState("")
    const [endate,setenddate] = useState("")
    const [number,setnumber] = useState("")
    const [photo,setphoto] = useState ("")

    const handalesubmit = async(e) => {
     e.preventDefault()
     await firebase.handleCreateNewListing (namee,price,stdate,endate,number,photo)
    }

  return (
    <div className='container mt-5'>

   <Form onSubmit={handalesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter student name</Form.Label>
        <Form.Control type="text" placeholder="Enter student name " onChange={(e) =>{setnamee(e.target.value)}} value={namee} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price"  onChange={(e) => { setprice(e.target.value)}} value={price}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="start date"  onChange={(e) => { setstdate(e.target.value)}} value={stdate}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> vaild date</Form.Label>
        <Form.Control type="number" placeholder="vaild date"  onChange={(e) => { setenddate(e.target.value)}} value={endate}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> number</Form.Label>
        <Form.Control type="number" placeholder="number"  onChange={(e) => { setnumber(e.target.value)}} value={number}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> uplode photo</Form.Label>
        <Form.Control type="file"   onChange={(e) => { setphoto(e.target.files[0])}}  />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    
    </div>
  )
}

export default Listingpage ;