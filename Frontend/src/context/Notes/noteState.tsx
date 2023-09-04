import { FC, useState } from "react";
import { toast } from "react-hot-toast";

import { Note } from "@/types"

import NoteContext from "./noteContext";

interface NoteStateProps {
  children: React.ReactNode
}

const NoteState: FC<NoteStateProps> = ({ children }) => {

  const host = import.meta.env.VITE_HOST;
  const [notes, setNotes] = useState<Note[] | null>(null);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token") || "",
  };

  const fetchNotes = async () => {
    const headers: HeadersInit = {
      "auth-token": localStorage.getItem("token") || "",
    }
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers
    });
    const json = await response.json();
    setNotes(json.notes);
  };

  const deleteNote = async (id: string) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers,
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.message);
      fetchNotes();
    } else {
      toast.error(json.message);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, deleteNote, fetchNotes }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
