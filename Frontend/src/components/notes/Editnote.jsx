import React, { useContext, useState, useEffect } from "react";
import noteContext from "../../context/Notes/noteContext";

const Editnote = (props) => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const context = useContext(noteContext);
  const { editNote } = context;
  const [note, setNote] = useState({
    id: "",
    edittitle: "",
    editdescription: "",
    edittag: "",
  });
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  const saveNote = (e) => {
    e.preventDefault();
    editNote(note.id, note);
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <>
      <div className="py-3"></div>
      <button
        type="button"
        ref={props.reference}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Note
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <i className="fa-regular fa-pen-to-square"></i> Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-3 align-items-center mb-3">
                  <div className="col-auto">
                    <label htmlFor="edittitle" className="form-label">
                      Title
                    </label>
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      name="edittitle"
                      onChange={onchange}
                      value={note.edittitle}
                      placeholder="Your Title"
                      id="edittitle"
                      required={true}
                    />
                  </div>
                  <div className="col-auto">
                    <label htmlFor="edittag" className="form-label">
                      Tag
                    </label>
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      name="edittag"
                      value={note.edittag}
                      onChange={onchange}
                      placeholder="general"
                      id="edittag"
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center mb-3"></div>
                <textarea
                  className="form-control"
                  rows="10"
                  cols="10"
                  id="editdescription"
                  name="editdescription"
                  placeholder="Write your notes here"
                  onChange={onchange}
                  value={note.editdescription}
                  required={true}
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={saveNote}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Editnote;
