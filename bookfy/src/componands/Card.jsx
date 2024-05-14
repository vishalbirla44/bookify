import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom'


const BookCard = (props) => {
  const navigate = useNavigate()

  const [url,seturl] = useState(null)

  const firebse = useFirebase()

  useEffect(() =>{
    firebse.getImageUrl(props.imageURL).then((url) => seturl(url))
  },[])


  return (
    <Card style={{ width: '18rem', margin:'25px' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.namee}</Card.Title>
        <Card.Text>
          price: {props.price}
          <br/>
          start date : {props.stdate}
          <br/>
          start date : {props.eddate}
          <br/>
          Number : {props.number}
        </Card.Text>
        <Button variant="primary" onClick={e => navigate(`/book/view/${props.id}`)}>View</Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard