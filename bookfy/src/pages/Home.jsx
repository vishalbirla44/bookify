import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from '../componands/Card'



const Home = () => {
    const firebase = useFirebase()

    const [books,setbooks] = useState([])

    useEffect(() => {
        firebase.listAllBooks().then((books) => setbooks(books.docs))
    },[])
  return (
    <div className='container mt-5' > 
        {books.map(books => <BookCard />)}
    </div>
  )
}

export default Home