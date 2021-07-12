import React, { useState } from "react";

const SongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const addSong = props.addSong;
    addSong(title);
    setTitle("");
  };
  return (
    <div className="form_app">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="song">Input Song Here :</label>
        <input
          type="Input Yur Song Here..."
          id="song"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Your Song</button>
      </form>
    </div>
  );
};

export default SongForm;
