import { FC, useState, useContext } from "react";
import { Edit, Trash } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AlertModal from "@/components/modals/alert-modal";
import noteContext from "@/context/Notes/noteContext";
import { Note } from "@/types";

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

      <Card className="w-full">
        <CardHeader className="px-2 pt-2">
          <div className="flex items-center justify-between w-h-full">
            <div>
              <Badge>
                {note.tag}
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => updateNote(note)} className="cursor-pointer w-8 h-8 relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <Edit size={20} />
              </button>
              <button onClick={() => setOpen(true)} className="cursor-pointer w-8 h-8 relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <Trash size={20} />
              </button>

            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold">{note.title}</CardTitle>
          <div className="mt-5 text-base break-words">
            {note.description}
          </div>
        </CardContent>
      </Card>

    </>
  );
};

export default Noteitem;
