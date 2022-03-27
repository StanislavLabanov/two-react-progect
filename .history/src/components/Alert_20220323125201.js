import React, {useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";
import {CSSTransition} from "react-transition-group";

export default function Alert(){

   const {alert, hide} = useContext(AlertContext)

   if(!alert.visible){
      return null
   }

   return(
      <CSSTransition>
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
         <strong>Внимание!</strong> {alert.text}
         <button 
         onClick={hide} 
         type="button" 
         className="btn-close" 
         aria-label="Close">
         </button>
      </div>
      </CSSTransition>
   )
}