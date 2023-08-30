import { useState, useContext, ChangeEvent, FormEvent } from "react";

import noteContext from "@/context/Notes/noteContext";
import { NewNote } from "@/types";

const Addnote = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState<NewNote>({
    title: "",
    description: "",
    tag: "",
  });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote({ ...note, description: e.target.value });
  };

  const saveNote = (e: FormEvent<HTMLButtonElement>) => {
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
          className="pr-5 my-3 d-inline-flex input-group input-group-sm"
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
            onChange={onInputChange}
            value={note.title}
            placeholder="Your Title"
            id="noteTitle"
            required={true}
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="mx-2 d-inline-flex"></div>
        <div
          className="my-3 d-inline-flex input-group input-group-sm"
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
            onChange={onInputChange}
            id="noteTag"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <textarea
          className="form-control"
          rows={10}
          cols={10}
          id="description"
          name="description"
          placeholder="Write your notes here"
          onChange={onDescriptionChange}
          value={note.description}
          required={true}
        ></textarea>

        <div className="my-3 py2">
          <button
            type="submit"
            className="mr-3 btn-sm btn-bg-custom"
            onClick={saveNote}
          >
            Add Note
          </button>
          <button
            type="reset"
            className="mx-3 btn-sm btn-bg-custom"
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
