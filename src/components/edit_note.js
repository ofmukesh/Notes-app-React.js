import { useState } from "react";
import { color_options } from "../utils/options";
import { useDispatch } from "react-redux";
import { Notes_types } from "../redux/actions";

export const EditNote = (props) => {
  const dispatch = useDispatch(); // dispatch action
  const { id } = props;
  const { title, content, color } = props.note;
  const [note, setNote] = useState({
    title: title,
    content: content,
    color: color,
  }); // note state

  // add note
  function handelOnEdit() {
    if (note.title !== "" && note.content !== "") {
      const newUpdatedNote = {
        title: note.title,
        content: note.content,
        color: note.color,
        date: new Date().toLocaleDateString(),
      };
      dispatch({
        type: Notes_types.UPDATE_NOTE,
        updated_note: newUpdatedNote,
        id: id,
      });
    }

    // close modal
    const close_edit_note_modal = document.querySelector(
      "#close_edit_note_modal"
    );
    close_edit_note_modal.click();
  }
  return (
    <>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          {/* modal header */}
          <div className="mt-2 px-3">
            <input
              value={note.title}
              type="text"
              className="form-control add_note_title"
              placeholder="Note title"
              onChange={(e) =>
                setNote({
                  ...note,
                  title: e.target.value,
                })
              }
            />
          </div>

          {/* modal body */}
          <div className="modal-body py-1">
            <textarea
              value={note.content}
              className="form-control add_note_content"
              cols="30"
              rows="10"
              placeholder="write your note here..."
              onChange={(e) =>
                setNote({
                  ...note,
                  content: e.target.value,
                })
              }
            ></textarea>
          </div>

          {/* modal footer */}
          <div className="modal_footer border-top p-2">
            <div className="row">
              <div className="col add_note_color_options">
                {color_options.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setNote({
                        ...note,
                        color: color,
                      })
                    }
                    className={`btn ${note.color === color && "selected"}`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
              <div className="col text-end">
                <button
                  id="close_edit_note_modal"
                  type="button"
                  className="btn btn-sm"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
                <button
                  disabled={note.title === "" || note.content === ""}
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={handelOnEdit}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
