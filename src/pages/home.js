import { useSelector } from "react-redux";
import SearchBar from "../components/search_bar";
import NotesCard from "../components/notes_card";
import "../assets/styles/notes.css";
import AddNote from "../components/add_note";

const Home = () => {
  const notes = useSelector((state) => state.notes.notes);
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
          <SearchBar />
        </div>

        {/* notes */}
        <div className="container">
          <div className="mt-2 row row-cols-1 row-cols-lg-3 row-cols-md-2">
            {notes &&
              notes.map((note,index) => (
                <div key={index} className="col mt-2">
                  <NotesCard carddata={note} />
                </div>
              ))}
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
