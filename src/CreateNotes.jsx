
import React, { useState } from "react";
import "./index.css";
import AddIcon from '@material-ui/icons/Add';

   const CreateNotes = (props) =>{
    const [note , setNote] = useState({
      title:"",
      content:"",
    });

    const InputEvent = (e)=>{
      const {name,value} = e.target;
      setNote((data) =>{
         return {
           ... data , [name]:value,
         }
      });
    }
    
    const addEvent = (e) =>{
      e.preventDefault();
      props.passNote(note);
      setNote({
        title:"",
        content:"",
      });
    }

    return (

        <div className="Notes">
          <form>
              <input type="text" placeholder="Title.." onChange = {InputEvent} value = {note.title} name = "title"/><br/>
              <textarea rows="" column="" placeholder="Take a Note.." onChange = {InputEvent}  value = {note.content} name = "content">

              </textarea><br/>
              <button className="add" onClick = {addEvent}>
                 <AddIcon className ="plus"/>
              </button>
          </form>
        </div>
    );
}
export default CreateNotes;