import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";


const BookDteail = () => {
    const firebase = useFirebase()
    const params = useParams()


    const [data,setdata] = useState(null)
    const [ url, setURL] = useState(null)

    useEffect(() => {
        firebase.getBookbyId(params.bookId).then((value) => setdata(value.data()))
    },[])


//     loding part


useEffect( () =>{
    if(data){
        const imageURL = data.imageURL
        console.log(imageURL)
        
        firebase.getImageUrl(imageURL).then((url) => setURL(url))
    }
},[data])

if(data==null) return <h2> Loding.....</h2>



return (<div>
       <img src={url}  />
</div>
)
}
export default BookDteail