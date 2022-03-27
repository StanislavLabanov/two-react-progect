import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import firebaseReduser from "./firebaseReduser";
import axios from 'axios'
import { REMOVE_NOTE, SHOW_LOADER } from "../types";

const url = 'https://react-progect-first-default-rtdb.firebaseio.com'

export const FirebaseState = ({children}) => {

   const initialState = {
      notes: [],
      loading: false
   }

   const [state, dispatch] = useReducer(firebaseReduser, initialState)

   const showLoader = () => dispatch({type: SHOW_LOADER})
   
   async function fetchNotes (){
      showLoader()
      const res = await axios.get(`${url}/notes.json`)
      console.log(res.data)
   }

   async function addNote(title) {
      const note = {
         title, data: new Data().toJSON()
      }

      const res = await axios.post(`${url}/notes.json`, note)
      console.log(res.data)
   }

   async function removeNote (id){
      await axios.delete(`${url}/notes/${id}.json`)

      dispatch({
         type: REMOVE_NOTE,
         payload: id
      })
   }

   return (
      <FirebaseContext.Provider value={({
         showLoader, fetchNotes, addNote, removeNote,
         loading: state.loading,
         notes: state.notes
      })}>
         {children}
      </FirebaseContext.Provider>
   )
}