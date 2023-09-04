import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut, UserPlus2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

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
                    <Button size="icon" variant="ghost" onClick={logout}>
                        <LogOut className='h-[1.2rem] w-[1.2rem]' />
                    </Button>
                ) : (
                    <div className='flex items-center gap-1'>
                        <Button size="icon" variant="ghost" onClick={() => navigate('/login')}>
                            <LogIn className='h-[1.2rem] w-[1.2rem]' />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => navigate('/signup')}>
                            <UserPlus2 className='h-[1.2rem] w-[1.2rem]' />
                        </Button>
                    </div>
                )
            }
        </>
    )
}

export default AuthLinks