import { FC } from "react"

import { TooltipProvider } from "@/components/ui/tooltip"

import NoteProvider from "./note-provider"
import ToastProvider from "./toast-provider"
import ThemeProvider from "./theme-provider"
import UserProvider from "./user-provider"

interface Providersprops {
    children: React.ReactNode
}

const Providers: FC<Providersprops> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <UserProvider>
                <NoteProvider>
                    <TooltipProvider>
                        <ToastProvider />
                        {children}
                    </TooltipProvider>
                </NoteProvider >
            </UserProvider>
        </ThemeProvider>
    )
}

export default Providers