import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" },
    { id: 4, title: "Song 4" },
  ]);
  const [age, setAge] = useState(24);
  const addSong = (title) => {
    setSongs([...songs, { title, id: 5 }]);
  };
  useEffect(() => {
    console.log("USEeFFECT RAN", songs);
  }, [songs]);
  useEffect(() => {
    console.log("USEeFFECT RAN", age);
  }, [age]);
  return (
    <div className="songlist_app">
      <ul>
        {songs.map((song) => {
          const { id, title } = song;
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <SongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add to Age:{age}</button>
    </div>
  );
};

export default SongList;
