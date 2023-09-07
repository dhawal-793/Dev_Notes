import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const HOST = import.meta.env.VITE_HOST;

const formSchema = z.object({
    email: z.string().email('Enter a valid Email Address'),
    password: z.string().min(6, 'Password should be atleast 8 characters').max(16, 'Password can only have a maximum of 16 characters'),
})

type LoginFormValues = z.infer<typeof formSchema>

const LoginForm = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })


    const onSubmit = async (data: LoginFormValues) => {
        try {
            setLoading(true)
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "Login-token": localStorage.getItem("token") || "",
                }
            }
            const res = await axios.post(`${HOST}/api/auth/login`, data, options)
            localStorage.setItem("token", res.data.authToken);

            toast.success(res.data.message)
            navigate('/')
        } catch (error) {
            toast.error("Something went wrong")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className='container max-w-4xl py-10 mx-auto'>
            <Heading title="Login" description='Login to DevNotes' />
            <Separator className='mt-4 mb-8' />
            <div className='max-w-lg mx-auto'>
                <Form {...form}>
                    <form onSubmit={form.control.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                disabled={loading}
                                                placeholder='Your Email'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='password'
                                                disabled={loading}
                                                placeholder='Your Password'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='flex flex-col items-start my-3 md:flex-row it md:items-center md:justify-between gap-y-3 md:gap-y-0'>
                            <div className="flex gap-2 mr-auto">
                                <Button
                                    disabled={loading}
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <Button
                                    disabled={loading}
                                    type="reset"
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button>
                            </div>
                            <div className='sm:pr-3'>
                                <p className='flex items-center text-base sm:text-lg text-accent-foreground/50 text- '>
                                    <span>Need an Accout ?</span>
                                    <Link to="/signup" className=' pb-[2px] ml-2 text-sm sm:text-base border-b border-b-current text-accent-foreground/90 hover:text-accent-foreground'>Sign up now!</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm