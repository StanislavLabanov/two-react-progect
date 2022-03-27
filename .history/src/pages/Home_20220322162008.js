import React, {Fragment, useContext, useEffect} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export default function Home(){
   const {loading, notes, fetchNotes} = useContext(FirebaseContext)

   useEffect(() => {

   }, [])

   return (
      <Fragment>
         <Form />

         <hr />

         <Notes notes={notes} />
      </Fragment>
   )
}