import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
          <div className="card custom-card">
            <div
              className="card-header custom-card-header text-light"
              style={{ backgroundColor: note.color }}
            >
              <h3 className="card-title">{note.title}</h3>
            </div>
            <div className="card-body custom-card-body">
              <p className="card-text">{note.content}</p>
            </div>
            <div className="card-footer custom-card-footer">
              <small className="text-muted">Date: {note.date}</small>
            </div>
          </div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
