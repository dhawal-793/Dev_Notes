import { FC, useState, useContext } from "react";
import { Edit, Trash } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AlertModal from "@/components/modals/alert-modal";
import ToolTipBox from "@/components/ui/tool-tip-box";
import { NoteContext } from "@/providers/note-provider";
import { Note } from "@/types";

interface NoteitemProps {
  note: Note;
  updateNote: (note: Note) => void;
}

const Noteitem: FC<NoteitemProps> = ({ note, updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const [open, setOpen] = useState(false)

  const delete_Note = async (id: string) => {
    deleteNote(id)
    setOpen(false)
  };

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => delete_Note(note._id)} />

      <Card className="w-full">
        <CardHeader className="px-2 pt-2">
          <div className="flex items-center justify-between w-h-full">
            <div>
              <Badge>
                {note.tag}
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <ToolTipBox tip="Edit Note">
                <button onClick={() => updateNote(note)} className="cursor-pointer w-8 h-8 relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <Edit size={20} />
                </button>
              </ToolTipBox>
              <ToolTipBox tip="Delete Note">
                <button onClick={() => setOpen(true)} className="cursor-pointer w-8 h-8 relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <Trash size={20} />
                </button>
              </ToolTipBox>

            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold break-words">{note.title}</CardTitle>
          <div className="mt-5 text-base break-words">
            {note.description}
          </div>
        </CardContent>
      </Card>

    </>
  );
};

export default Noteitem;
