import { Link, useNavigate } from 'react-router-dom';
import { LogIn, LogOut, UserPlus2 } from 'lucide-react';

const AuthLinks = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            {
                localStorage.getItem("token") ? (
                    <button onClick={logout} className={`py-1 px-2 rounded-lg capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] bg-gray-200  duration-500 hover:bg-gray-300 flex items-center gap-2`}>
                        <LogOut size={18} /> Logout
                    </button>
                ) : (
                    <div className='flex items-center gap-3'>
                        <li className={`py-1 px-2 rounded-lg capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] bg-gray-200  duration-500 hover:bg-gray-300 `}>
                            <Link
                                to="/login"
                                className="flex items-center gap-2 hover:text-gray-900"
                                role="button"
                            >
                                <LogIn size={18} /> Login
                            </Link>

                        </li>
                        <li className={` py-1 px-2 rounded-lg capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] bg-gray-200  duration-500 hover:bg-gray-300`}>
                            <Link
                                to="/signup"
                                className="flex items-center gap-2 hover:text-gray-900"
                                role="button"
                            >
                                <UserPlus2 size={18} /> SignUp
                            </Link>
                        </li>
                    </div>
                )
            }
        </>
    )
}

export default AuthLinks