import { FC } from "react"

import { TooltipProvider } from "@/components/ui/tooltip"
import NoteState from "@/context/Notes/noteState"
import UserState from "@/context/Users/userState"

import ToastProvider from "./toast-provider"
import ThemeProvider from "./theme-provider"

interface Providersprops {
    children: React.ReactNode
}

const Providers: FC<Providersprops> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <UserState>
                <NoteState>
                    <TooltipProvider>
                        <ToastProvider />
                        {children}
                    </TooltipProvider>
                </NoteState >
            </UserState>
        </ThemeProvider>
    )
}

export default Providers