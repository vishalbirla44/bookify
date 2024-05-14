import { createContext,useContext,useState,useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "firebase/auth"
import { getFirestore,collection,addDoc,getDocs,doc,getDoc} from "firebase/firestore"
import { getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"


const Firebasecontext = createContext(null)
export const useFirebase = () => useContext(Firebasecontext)

const firebaseConfig = {
    apiKey: "AIzaSyAnUYr9PVNEEwF3laWt145ZeK0d-uyFXPI",
    authDomain: "bookfy-3cf63.firebaseapp.com",
    projectId: "bookfy-3cf63",
    storageBucket: "bookfy-3cf63.appspot.com",
    messagingSenderId: "885578162647",
    appId: "1:885578162647:web:a4d37e5019e47378aaeb92",
    measurementId: "G-L1FNZXFSFY"
  };

  const FirebaseApp = initializeApp(firebaseConfig)
  const Firebaseauth = getAuth(FirebaseApp)
  const googleprovider = new GoogleAuthProvider()
  const firestore = getFirestore(FirebaseApp)
  const storage = getStorage(FirebaseApp)
  

export const FirebaseProvider = (props) => {

    // check use was log in or not 
    const [user, setuser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(Firebaseauth,user =>{
            if(user) setuser(user);
            else setuser(null);
        

        })
    }, [])
    

    const singupUserWithEmailAndPassword = (email,password) =>{
        createUserWithEmailAndPassword(Firebaseauth ,email,password)
    }
    const singinUserWIthEmailAndPassword = (email,password ) =>{
        signInWithEmailAndPassword(Firebaseauth,email,password)
    }

    const singinWithGoogle = () => signInWithPopup(Firebaseauth,googleprovider) 
    
    // console.log(user)

    const isLoggedin = user ? true : false
    
    // this is for add listing 
    const handleCreateNewListing =  async(namee,price,stdate,eddate,number,photo) =>{
      const imageref = ref(storage,`uplods/images/${Date.now()}-${photo.name}`)
      const uplodeResult = await uploadBytes(imageref,photo);
      return await addDoc(collection(firestore,"books"),{
        namee,
        price,
        stdate,
        eddate,
        number,
        imageURL: uplodeResult.ref.fullPath,
        userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
    photoURL: user.photoURL, 
      })
    }
    
    // list all books 

    const listAllBooks = () => {
        return getDocs(collection(firestore ,'books'))

    }

    const getImageUrl= (path) =>{
      return getDownloadURL(ref(storage,path))
    }

    // for rander the deteails page 

    const getBookbyId = async (id) => {
      const docRef = doc(firestore,'books',id)
      const result = await getDoc(docRef)
      return result
    }
    
    return <Firebasecontext.Provider value={{singupUserWithEmailAndPassword,singinUserWIthEmailAndPassword,singinWithGoogle,isLoggedin,handleCreateNewListing,listAllBooks,getImageUrl,getBookbyId}}>
        {props.children}
    </Firebasecontext.Provider>
}

