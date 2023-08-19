import React from "react";
import SearchBar from "../components/search_bar";
import NotesCard from "../components/notes_card";
import "../assets/styles/notes.css";
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <>
      <h2 className="mt-3">
        <b>Notes</b>
      </h2>
      <div className="mt-3">
        <SearchBar />
      </div>
      <div className="container">
        <div className="mt-2 row row-cols-1 row-cols-lg-3 row-cols-md-2">
          {notes &&
            notes.map((note) => (
              <div key={note.id} className="col mt-2">
                <NotesCard carddata={note} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
