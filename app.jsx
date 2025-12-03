import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./styles.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addNoteHandler = (title, desc) => {
    setNotes((prev) => [
      ...prev,
      { id: Math.random().toString(), title, desc }
    ]);
  };
  
  const deleteNoteHandler = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="main-heading">NoteBook</h1>

      <div className="top-info">
        <input
          type="text"
          placeholder="Search Notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-box"
        />
        <p>Total Notes: {notes.length}</p>
        <p>Showing: {filteredNotes.length}</p>
      </div>

      <AddNote onAddNote={addNoteHandler} />
      <NoteList notes={filteredNotes} onDelete={deleteNoteHandler} />
    </div>
  );
}

export default App;
