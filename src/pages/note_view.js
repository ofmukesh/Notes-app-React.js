import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { EditNote } from "../components/edit_note";

const NoteView = () => {
  const { id } = useParams();
  const note = useSelector((state) => state.notes.notes[id]);
  // if note is undefined, then return 'Not found'
  if (!note)
    return (
      <div>
        <center>
          <h1>404 Not found</h1>
          <Link to="/">Go Home</Link>
        </center>
      </div>
    );
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Link to="/">Go back</Link>
          <div className="card custom-card">
            <div
              className="card-header custom-card-header text-light d-flex justify-content-between"
              style={{ backgroundColor: note.color }}
            >
              <h3 className="card-title">{note.title}</h3>
              <button className="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#editNotesModal">
                <svg
                  class="svg-icon"
                  fill="none"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="white" stroke-linecap="round" stroke-width="2">
                    <path d="m20 20h-16"></path>
                    <path
                      clip-rule="evenodd"
                      d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="card-body custom-card-body">
              <p className="card-text">{note.content}</p>
            </div>
            <div className="card-footer custom-card-footer">
              <small className="text-muted">Date: {note.date}</small>
            </div>
          </div>
        </div>
      </div>
      {/* edit note modal */}
      <div
        className="modal fade"
        id="editNotesModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <EditNote id={id} note={note} />
      </div>
    </div>
  );
};

export default NoteView;
