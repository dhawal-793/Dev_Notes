import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NoteModal from "@/components/modals/note-modal";
import Heading from "@/components/ui/heading";
import ToolTipBox from "@/components/ui/tool-tip-box";
import { NoteContext } from "@/providers/note-provider";
import { Note } from "@/types";

import NoteItem from "./Noteitem";

const Notes = () => {

  const navigate = useNavigate();
  const context = useContext(NoteContext);
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
  }, []);

  return (
    <>
      <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

      <div className="container">
        <div className="flex items-center justify-between mt-10 mb-4">
          <Heading title="DevNotes" description="Your notes on the cloud" />
          <Button onClick={() => openModal(null)} size="sm" className="hidden sm:block">
            Add a Note
          </Button>
          <ToolTipBox tip="Create a note">
            <Button onClick={() => openModal(null)} size="icon" className="rounded-full sm:hidden">
              <Plus />
            </Button>
          </ToolTipBox>

        </div>
        <Separator />

        <div className="my-10">
          <div className="absolute w-full px-4 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {notes === null ? (
              <h5 className="text-lg font-medium">Loading...</h5>
            ) :
              notes.length < 1 && (
                <>
                  <h4 className="mb-3 text-3xl font-bold">Sorry You don't have any notes.</h4>
                  <h5 className="text-lg font-medium">Create a note, and it will appear here</h5>
                </>
              )
            }
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-[masonary] grid-flow-dense">
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