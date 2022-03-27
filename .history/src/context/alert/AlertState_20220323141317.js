import React, {useReducer} from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import { AlertContext } from "./alertContext";
import alertReducer from "./alertRegucer";

export default function AlertState ({children}){
   const [state, dispatch] = useReducer(alertReducer, {visible: false})

   function show (text, type='warning'){
      dispatch({
         type: SHOW_ALERT,
         payload: {text, type}
      })
   }

   function hide (){
      dispatch({type: HIDE_ALERT})
   }

   console.log(state)
   return(
      <AlertContext.Provider value={{show, hide, alert: state}}>
         {children}
      </AlertContext.Provider>
   )
}