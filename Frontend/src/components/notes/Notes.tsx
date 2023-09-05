import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NoteModal from "@/components/modals/note-modal";
import Heading from "@/components/ui/Heading";
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

      <div className="container">
        <div className="flex items-center justify-between mt-10 mb-4 ">
          <Heading title="DevNotes" description="Your notes..." />
          <Button onClick={() => openModal(null)}>
            Add a Note
          </Button>
        </div>
        <Separator />

        <div className="my-10">
          {notes === null ? (
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h5 className="text-lg font-medium text-center">Loading...</h5>
            </div>
          ) :
            notes.length < 1 && (
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h4 className="mb-3 text-3xl font-bold">Sorry no note available for now.</h4>
                <h5 className="text-lg font-medium text-center">Create a note to see here.</h5>
              </div>
            )
          }
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-masonary">
            {notes && notes.map((note) => {
              return (
                <div key={note?._id}>
                  <NoteItem note={note} updateNote={() => openModal(note)} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
};

export default Notes;