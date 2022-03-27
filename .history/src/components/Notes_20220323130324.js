import React from "react";
import { TransitionGroup, Css } from "react-transition-group";

export default function Notes ({notes, onRemove}){
   return (
      <ul className="list-group">
         {notes.map(note => (
            <li className="list-group-item note" key={note.id}>
               <div>
               <strong>{note.title}</strong>
               <small>{note.data}</small>
               </div>
            <button type="button" onClick={() => onRemove(note.id)} className="btn btn-outline-danger btn-sm">&times;</button>
            </li>
         ))}
      </ul>
   )
}