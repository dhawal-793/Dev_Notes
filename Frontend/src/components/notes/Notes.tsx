import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import noteContext from "@src/context/Notes/noteContext";
import { Note } from "@src/types";

import Addnote from "./Addnote";
import Editnote from "./Editnote";
import NoteItem from "./Noteitem";

const Notes = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const ref = useRef<HTMLButtonElement | null>(null);
  const { notes, fetchNotes } = context;
  const [note, setNote] = useState({
    id: "",
    edittitle: "",
    editdescription: "",
    edittag: "",
  });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const updateNote = (note: Note) => {
    setNote({
      id: note._id,
      edittitle: note.title,
      editdescription: note.description,
      edittag: note.tag,
    });
    ref?.current?.click();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <>
      <Addnote />
      <Editnote note={note} reference={ref} />

      <div className="container">
        <div className="container ">
          <h3>Find Your Notes here...</h3>
          {notes.length < 1 && (
            <div className="container">
              <h5 className="text-center">No Notes Available to see</h5>
            </div>
          )}
          <div className="row">
            {notes.map((note) => {
              return (
                <div className="p-2 col-sm-12 col-md-6 col-lg-4" key={note?._id}>
                  <NoteItem note={note} updateNote={updateNote} />
                </div>
              );
            })}
          </div>
          <div className="container pb-5 mb-5"></div>
        </div>
      </div>
    </>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Notes;
