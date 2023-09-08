import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [noteArray, addNotes] = useState([]); 

  function handleAddNotes(note){
    addNotes([...noteArray, note]);
  }

  function deleteNote(idx){
    addNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== idx;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAddNotes} />
      {noteArray.map((noteItr, idx) => (
        <Note key={idx} id={idx} title={noteItr.title} content={noteItr.content} onDel={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
