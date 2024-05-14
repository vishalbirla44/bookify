import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../componands/Card'
import  CardGroup from 'react-bootstrap/CardGroup'



const Home = () => {
    const firebase = useFirebase()

    const [books,setbooks] = useState([])

    useEffect(() => {
        firebase.listAllBooks().then((books) => setbooks(books.docs))
    },[])
  return (
    <div className='container mt-5' > 
    <CardGroup>
        {books.map(books => <BookCard key={books.id} id ={books.id} {...books.data()} />)}
    </CardGroup>
    </div>
  )
}

export default Home