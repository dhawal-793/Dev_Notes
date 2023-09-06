import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut, UserPlus2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ToolTipBox from '@/components/ui/tool-tip-box';

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
                    <ToolTipBox tip="Log Out">
                        <Button size="icon" variant="ghost" onClick={logout}>
                            <LogOut className='h-[1.2rem] w-[1.2rem]' />
                        </Button>
                    </ToolTipBox>
                ) : (
                    <div className='flex items-center gap-1'>
                        <ToolTipBox tip="Log In">
                            <Button size="icon" variant="ghost" onClick={() => navigate('/login')}>
                                <LogIn className='h-[1.2rem] w-[1.2rem]' />
                            </Button>
                        </ToolTipBox>
                        <ToolTipBox tip="Sign Up">
                            <Button size="icon" variant="ghost" onClick={() => navigate('/signup')}>
                                <UserPlus2 className='h-[1.2rem] w-[1.2rem]' />
                            </Button>
                        </ToolTipBox>
                    </div>
                )
            }
        </>
    )
}

export default AuthLinks