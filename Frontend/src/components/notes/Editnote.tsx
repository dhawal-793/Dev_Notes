// import { ChangeEvent, FC, FormEvent, LegacyRef, useEffect, useState } from "react"

import Notes from "./Notes";

// import { EditedNote } from "@/types";
// import noteContext from "@/context/Notes/noteContext";


// interface EditNoteProps {
// note: EditedNote
// reference: LegacyRef<HTMLButtonElement>
// }

const Editnote = () => {


  // const context = useContext(noteContext);
  // const { editNote } = context;

  // const [note, setNote] = useState<EditedNote>({
  //   id: "",
  //   edittitle: "",
  //   editdescription: "",
  //   edittag: "",
  // });

  // const saveNote = (e: FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   // editNote(note);
  // };
  // const onchange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNote({ ...note, [e.target.name]: e.target.value });
  // };
  // const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setNote({ ...note, [e.target.name]: e.target.value });
  // };

  // useEffect(() => {
  //   setNote(props.note);
  // }, [props.note]);

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <>
      <Notes />

      {/* <div className="py-3"></div>
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
        tabIndex={-1}
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
                <div className="mb-3 row g-3 align-items-center">
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
                <div className="mb-3 row g-3 align-items-center"></div>
                <textarea
                  className="form-control"
                  rows={10}
                  cols={10}
                  id="editdescription"
                  name="editdescription"
                  placeholder="Write your notes here"
                  onChange={onDescriptionChange}
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
      </div> */}
    </>
  );
};


export default Editnote