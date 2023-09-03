import { FC } from "react"

import NoteState from "@/context/Notes/noteState"
import UserState from "@/context/Users/userState"

import ToastProvider from "./ToastProvider"

interface Providersprops {
    children: React.ReactNode
}

const Providers: FC<Providersprops> = ({ children }) => {
    return (
        <UserState>
            <NoteState>
                    <ToastProvider />
                    {children}
            </NoteState >
        </UserState>
    )
}

export default Providers