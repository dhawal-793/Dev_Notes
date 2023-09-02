import { useState } from "react";

import ModalContext from "./ModalContext";

interface ModalStateProps {
    children: React.ReactNode
}

const ModalState: React.FC<ModalStateProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </ModalContext.Provider>
    );
};


export default ModalState;