import { FC, useState, createContext } from "react";
import { toast } from "react-hot-toast";

import { Note } from "@/types";

const HOST = import.meta.env.VITE_HOST;



interface InitialDataType {
    notes: Note[] | null;
    deleteNote: (id: string) => void;
    fetchNotes: () => void;
}

const notes: Note[] = [];
const initialData: InitialDataType = {
    notes,
    deleteNote: () => { },
    fetchNotes: () => { },
}

export const NoteContext = createContext(initialData);



interface NoteProviderProps {
    children: React.ReactNode
}

const NoteProvider: FC<NoteProviderProps> = ({ children }) => {

    const [notes, setNotes] = useState<Note[] | null>(null);

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") || "",
    };

    const fetchNotes = async () => {
        const headers: HeadersInit = {
            "auth-token": localStorage.getItem("token") || "",
        }
        const response = await fetch(`${HOST}/api/notes/fetchallnotes`, {
            method: "GET",
            headers
        });
        const json = await response.json();
        setNotes(json.notes);
    };

    const deleteNote = async (id: string) => {
        const response = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
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

export default NoteProvider;