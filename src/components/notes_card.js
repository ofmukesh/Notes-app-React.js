import { Link } from "react-router-dom";
import React from "react";

export const NotesCard = (props) => {
  const { title, content, date, color } = props.carddata; // destructuring
  const { onDelete, id } = props; // destructuring
  return (
    <div
      className="notes_card mt-2 py-2 px-3"
      style={{ backgroundColor: color }}
    >
      <Link style={{ textDecoration: "none", color: "inherit" }} to={`/${id}`}>
        <h4 className="notes_header">{title}</h4>
      </Link>
      <p className="notes_content">
        {content.split("\n").map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="notes_footer row">
        <div className="date_updated col">{date}</div>
        <div className="col text-end">
          <button
            onClick={() => onDelete(id)}
            className="delete_btn btn btn-light text-danger btn-sm rounded-circle"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};