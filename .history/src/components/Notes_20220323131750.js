import React from "react";
import { TransitionGroup, CSSTransition} from "react-transition-group";

export default function Notes ({notes, onRemove}){
   return (
      <TransitionGroup component="ul" className="list-group">
         {notes.map(note => (
            <CSSTransition key={note.id} classNames={'note'} timeout={600}>
            <li className="list-group-item note" key={note.id}>
               <div>
               <strong>{note.title}</strong>
               <small>{note.data}</small>
               </div>
            <button type="button" onClick={() => onRemove(note.id)} className="btn btn-outline-danger btn-sm">&times;</button>
            </li>
            </CSSTransition>
         ))}
      </TransitionGroup>
   )
}