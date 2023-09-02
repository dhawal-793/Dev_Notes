import  { createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext