import React from "react";

export default function Notes ({notes}){
   return (
      <ul className="list-group">
         {notes.map(note => (
            <li className="list-group-item note" key={note.id}
            >
               <div>
               <strong>{note.title}</strong>
               <small>{note.date}</small>
               </div>
            <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
            </li>
         ))}
      </ul>
   )
}