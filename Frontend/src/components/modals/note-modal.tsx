import { FC, useEffect, useState } from "react"

import NotesForm from "@/components/notes/NotesForm"
import Modal from "@/components/ui/modal"
import { Separator } from "@/components/ui/separator";
import { Note } from "@/types"

interface NoteModalProps {
    isOpen: boolean;
    onClose: () => void
    initialData: Note | null
}

const NoteModal: FC<NoteModalProps> = ({ initialData, isOpen, onClose }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const title = initialData ? "Edit Note" : "Add Note"
    const description = initialData ? "Edit your Note" : "Add a new Note"

    return (
        <Modal
            title={title}
            description={description}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Separator className="mb-3" />

            <NotesForm initialData={initialData} handleSubmit={onClose} />
        </Modal>
    )
}

export default NoteModal