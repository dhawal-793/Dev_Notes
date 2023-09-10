import { FC, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'

import { NewUser, User } from "@/types";

const HOST = import.meta.env.VITE_HOST;



interface InitialStateType {
    signUp: (userData: NewUser) => void;
    logIn: (userData: User) => void;
}

const initialState: InitialStateType = {
    signUp: () => { },
    logIn: () => { },
}

export const UserContext = createContext(initialState);



interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {

    const navigate = useNavigate();

    const signUp = async (userData: NewUser) => {
        const response = await fetch(`${HOST}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const json = await response.json();
        if (json.success) {
            navigate("/login");
            toast.success(json.message)

        } else {
            toast.error(json.message)
        }
    };

    const logIn = async (userData: User) => {
        const response = await fetch(`${HOST}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            toast.success(json.message)
            navigate("/");
        } else {
            toast.error(json.message)
        }
    };

    return (
        <UserContext.Provider value={{ signUp, logIn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;