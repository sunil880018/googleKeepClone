import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./index.css";

function Note(props){

    const deleteNote = () =>{
        props.deleteItem(props.id);
    };

    return (
          <div className="myNote">
          <p className="title">{props.title}</p>
          <p className="content">{props.content}</p>
          <div className="dbtn">
          <button className="deletebtn" onClick = {deleteNote}>
              <DeleteOutlineIcon className="delete"/>
          </button>
          </div>
        </div>
    );
}
export default Note;