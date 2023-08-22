import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Notes_types } from "../redux/actions";
import "../assets/styles/notes.css";
import { AddNote, NotesCard, SearchBar } from "../components";

const Home = () => {
  const dispatch = useDispatch(); // dispatch action
  const notes = useSelector((state) => state.notes.notes); // get notes from redux store
  const [search, setSearch] = useState(""); // get search from redux store

  // filter notes
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  // handle functions for notes
  // search notes
  function handleSearch(search) {
    setSearch(search);
  }

  // delete note
  function handleDelete(id) {
    dispatch({ type: Notes_types.DELETE_NOTE, id: id });
  }
  return (
    <>
      <div className="notes_container">
        {/* notes header */}
        <h2 className="notes_header mt-3">
          <div className="row">
            {/* notes title */}
            <div className="col">
              <b>Notes</b>
            </div>
            {/* add notes */}
            <div className="col text-end">
              <button
                className="add_btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addNotesModal"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </h2>

        {/* search notes */}
        <div className="mt-3">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* notes */}
        <div className="container">
          <div className="mt-2 row row-cols-1 row-cols-lg-3 row-cols-md-2">
            {filteredNotes && (filteredNotes.length > 0) ? (
              filteredNotes.map((note, index) => (
                <div key={index} className="col mt-2">
                  <NotesCard
                    id={index}
                    carddata={note}
                    onDelete={handleDelete}
                  />
                </div>
              ))
            ) : (
              <div className="notes_not_found mt-3">No notes found</div>
            )}
          </div>
        </div>
      </div>

      {/* add notes modal */}
      <div
        className="modal fade"
        id="addNotesModal"
        tabIndex="-1"
        aria-labelledby="addNotesModalLabel"
        aria-hidden="true"
      >
        <AddNote />
      </div>
    </>
  );
};

export default Home;
