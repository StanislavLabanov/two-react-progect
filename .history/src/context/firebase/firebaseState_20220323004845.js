import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import firebaseReduser from "./firebaseReduser";
import axios from 'axios'
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";

const url = 'https://react-progect-first-default-rtdb.firebaseio.com/'

export const FirebaseState = ({children}) => {

   const initialState = {
      notes: [],
      loading: false
   }

   const [state, dispatch] = useReducer(firebaseReduser, initialState)

   const showLoader = () => dispatch({type: SHOW_LOADER})
   
   async function fetchNotes (){
      showLoader()
      const res = await axios.get(`${url}`)
      
      const payload = Object.keys(res.data).map(key => {
         return{
            ...res.data[key],
            id: key
         }
      })

      dispatch({
         type: FETCH_NOTES,
         payload
      })
   }

   async function addNote(title) {
      const note = {
         title, data: new Date().toJSON()
      }

      try{
         const res = await axios.post(`${url}/notes.json`, note)
         const payload = {
            ...note,
            id: res.data.name
         }

         dispatch({
            type: ADD_NOTE,
            payload
         })
      }catch (e){
         throw new Error(e.message)
      }
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