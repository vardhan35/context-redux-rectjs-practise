import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" },
    { id: 4, title: "Song 4" },
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "New Song", id: 5 }]);
  };
  return (
    <div className="songlist_app">
      <ul>
        {songs.map((song) => {
          const { id, title } = song;
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add Song</button>
    </div>
  );
};

export default SongList;
