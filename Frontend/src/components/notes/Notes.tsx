import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import NoteModal from "@/components/NoteModal";
import noteContext from "@/context/Notes/noteContext";
import { Note } from "@/types";

import NoteItem from "./Noteitem";

const Notes = () => {

  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  const [open, setOpen] = useState(false)
  const [modalProps, setModalProps] = useState<Note | null>(null)

  const openModal = (data: Note | null) => {
    // console.log(data);
    setModalProps(data)
    setOpen(true)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
  }, [navigate, fetchNotes]);

  return (
    <>
      <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />
      <Button onClick={() => openModal(null)}>
        Add a Note
      </Button>

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
                  <NoteItem note={note} updateNote={() => openModal(note)} />
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

export default Notes;
