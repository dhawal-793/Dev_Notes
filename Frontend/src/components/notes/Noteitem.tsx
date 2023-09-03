import { FC, useState, useContext } from "react";

import noteContext from "@/context/Notes/noteContext";
import { Note } from "@/types";
import AlertModal from "../modals/alert-modal";

interface NoteitemProps {
  note: Note;
  updateNote: (note: Note) => void;
}

const Noteitem: FC<NoteitemProps> = ({ note, updateNote }) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const [open, setOpen] = useState(false)

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => deleteNote(note._id)} />
      <div className="container ">
        <div className="py-3 mb-5 rounded card custom-shadow bg-body">
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
              className="mx-2 fa-regular fa-pen-to-square cursorPointer"
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
              className="mx-2 fa-regular fa-trash-can cursorPointer"
              onClick={() => setOpen(true)}
            ></i>
          </div>
          <div className="my-2 card-body">
            <h4 className="my-2 card-title">{note.title}</h4>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
