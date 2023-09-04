import { createContext } from "react";

import { Note } from "@/types";


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

const noteContext = createContext(initialData);

export default noteContext;
