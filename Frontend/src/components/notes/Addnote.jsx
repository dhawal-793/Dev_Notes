import { useState, useContext } from "react";
import noteContext from "../../context/Notes/noteContext";
const Addnote = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const saveNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <div className="container ">
      <h3>Add a Note</h3>
      <form>
        <div
          className="d-inline-flex input-group input-group-sm pr-5 my-3"
          style={{ maxWidth: "280px" }}
        >
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            name="title"
            onChange={onchange}
            value={note.title}
            placeholder="Your Title"
            id="noteTitle"
            required={true}
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="d-inline-flex  mx-2"></div>
        <div
          className="d-inline-flex input-group input-group-sm my-3"
          style={{ maxWidth: "280px" }}
        >
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Tag
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            name="tag"
            placeholder="general"
            value={note.tag}
            onChange={onchange}
            id="noteTag"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <textarea
          className="form-control"
          rows="10"
          cols="10"
          id="description"
          name="description"
          placeholder="Write your notes here"
          onChange={onchange}
          value={note.description}
          required={true}
        ></textarea>

        <div className="my-3 py2">
          <button
            type="submit"
            className="btn-sm btn-bg-custom mr-3"
            onClick={saveNote}
          >
            Add Note
          </button>
          <button
            type="submit"
            className="btn-sm btn-bg-custom mx-3"
            onClick={() => {
              setNote({ ...note, title: "", description: "", tag: "general" });
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Addnote;
