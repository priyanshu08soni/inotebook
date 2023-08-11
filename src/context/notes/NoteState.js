

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{
  const host="http://localhost:5000";
    const notesInitial=[]
      const [notes,setNotes]=useState(notesInitial)
      //GET all Notes
      const getNotes=async(title,description,tag)=>{
        //Api Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYjc5MThmMTFjMmI0NzhmNmE1NmIwIn0sImlhdCI6MTY5MDAwODY4NX0.9tYQcs0WXawoE1De43XBw7dVAIEX7L_J7ad5y1XrD-Q",

          },
        });
        const json=await response.json()
        console.log(json)
        setNotes(json);
      }
      const addNote=async(title,description,tag)=>{
        //Api Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYjc5MThmMTFjMmI0NzhmNmE1NmIwIn0sImlhdCI6MTY5MDAwODY4NX0.9tYQcs0WXawoE1De43XBw7dVAIEX7L_J7ad5y1XrD-Q",

          },
          body: JSON.stringify({title,description,tag}),
        });
        const note= await response.json(); 
        setNotes(notes.concat(note))
      }
      //Delete a Note
      const deleteNote=async(id)=>{
        //Api Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYjc5MThmMTFjMmI0NzhmNmE1NmIwIn0sImlhdCI6MTY5MDAwODY4NX0.9tYQcs0WXawoE1De43XBw7dVAIEX7L_J7ad5y1XrD-Q",

          },
        });
        const json= await response.json(); 
        console.log(json)
        console.log("delete "+id)
        //if both id's are same then it will remain otherwise it will discarded.
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

      }
      //Edit a Note
      const editNote=async(id,title,description,tag)=>{
        //API call.
          const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYjc5MThmMTFjMmI0NzhmNmE1NmIwIn0sImlhdCI6MTY5MDAwODY4NX0.9tYQcs0WXawoE1De43XBw7dVAIEX7L_J7ad5y1XrD-Q",

            },
            body: JSON.stringify({title,description,tag}),
          });
          const json= await response.json(); 
          console.log(json);

        let newNotes=JSON.parse(JSON.stringify(notes));
        //logic to edit in client.
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].description=description;
            newNotes[index].tag=tag;
            break;
          }
        }  
        setNotes(newNotes);
        }
      
    return(

        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;