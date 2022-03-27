import React, {Fragment, useContext, useEffect} from "react";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Notes from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export default function Home(){
   const {loading, notes, fetchNotes} = useContext(FirebaseContext)
   console.log(notes)
   useEffect(() => {
      fetchNotes()

   }, [])

   return (
      <Fragment>
         <Form />

         <hr />

         {loading
         ? <Loader />
         : <Notes notes={notes} />
         }

      </Fragment>
   )
}