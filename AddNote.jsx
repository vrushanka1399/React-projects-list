import { useState } from "react";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || desc.trim().length === 0) return;

    props.onAddNote(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <form className="note-form" onSubmit={submitHandler}>
      <label>Note Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Note Desc:</label>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <button className="add-btn">Add To Book</button>
    </form>
  );
}

export default AddNote;
