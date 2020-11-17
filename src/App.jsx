import React, { useState } from "react";
import CreateNotes from "./CreateNotes";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
const App = ()=>{
    const [addItem , setaddItem] = useState([]);
    const addNote = (note) =>{
      setaddItem((data) =>{
          return [... data , note];
      });
    }
    const onDelete = (id) =>{
        setaddItem((data) =>{
              return data.filter((item,index)=> {
                  return index !== id;
            });
        });
    };

    
    return(
    <>
    <Header/>
    <CreateNotes passNote ={addNote}/>

    <div className="allNotes">
    {
        addItem.map((val,index) => {
            return (
               <Note
                   key ={index}
                   id ={index}
                   title ={val.title}
                   content ={val.content}
                   deleteItem = {onDelete}
               />
            );
        })
    }
    </div>
    <Footer/>
    </>
    );
}

export default App;