

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{
    const notesInitial=[
        {
          "_id": "64bdeece22e0d220bfed393a",
          "user": "64bb7918f11c2b478f6a56b0",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "presonal",
          "date": "2023-07-24T03:23:58.687Z",
          "__v": 0
        },
        {
          "_id": "64bdeece22e0d220bfed393a",
          "user": "64bb7918f11c2b478f6a56b0",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "presonal",
          "date": "2023-07-24T03:23:58.687Z",
          "__v": 0
        },
        {
          "_id": "64bdeece22e0d220bfed393a",
          "user": "64bb7918f11c2b478f6a56b0",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "presonal",
          "date": "2023-07-24T03:23:58.687Z",
          "__v": 0
        },
        {
          "_id": "64bdeece22e0d220bfed393a",
          "user": "64bb7918f11c2b478f6a56b0",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "presonal",
          "date": "2023-07-24T03:23:58.687Z",
          "__v": 0
        },
        {
            "_id": "64bdeece22e0d220bfed393a",
            "user": "64bb7918f11c2b478f6a56b0",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "presonal",
            "date": "2023-07-24T03:23:58.687Z",
            "__v": 0
        },
        {
            "_id": "64bdeece22e0d220bfed393a",
            "user": "64bb7918f11c2b478f6a56b0",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "presonal",
            "date": "2023-07-24T03:23:58.687Z",
            "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
    return(

        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;