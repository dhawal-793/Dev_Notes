import { useContext } from "react";

import noteContext from "../../context/Notes/noteContext";

const Noteitem = (props) => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <div className="container ">
      <div className="card custom-shadow py-3 mb-5 bg-body rounded">
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            left: "21px",
          }}
        >
          <span className="badge bg-danger">
            <i className="fa-solid fa-tag cursorPointer"></i> {note.tag}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "40px",
          }}
        >
          <i
            className="fa-regular fa-pen-to-square mx-2 cursorPointer"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "10px",
          }}
        >
          <i
            className="fa-regular fa-trash-can mx-2 cursorPointer"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
        </div>
        <div className="card-body my-2">
          <h4 className="card-title my-2">{note.title}</h4>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Noteitem;
