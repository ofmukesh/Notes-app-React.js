import { Link } from "react-router-dom";
import React from "react";
import { EditNote } from "./edit_note";

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
            className="me-1 btn btn-sm btn-light rounded-circle"
            data-bs-toggle="modal"
            data-bs-target="#editNotesModal"
          >
            <svg
              class="svg-icon"
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="blue" stroke-linecap="round" stroke-width="2">
                <path d="m20 20h-16"></path>
                <path
                  clip-rule="evenodd"
                  d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="delete_btn btn btn-light text-danger btn-sm rounded-circle"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
      {/* edit note modal */}
      <div
        className="modal fade"
        id="editNotesModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <EditNote id={id} note={props.carddata} />
      </div>
    </div>
  );
};
