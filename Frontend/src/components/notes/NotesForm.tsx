import { FC, useContext, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { NoteContext } from "@/providers/note-provider";
import { Note } from "@/types";

const HOST = import.meta.env.VITE_HOST;


const formSchema = z.object({
    title: z.string().min(3, 'Title should be atleast 3 characters').max(35, 'Title can only have a maximum of 35 characters'),
    description: z.string().min(10, 'Description should be atleast 10 characters').max(120, 'Description can only have a maximum of 120 characters'),
    tag: z.string().min(3, "Tag should be atleast 3 characters").max(8, 'Tag can only have a maximum of 8 characters')
})

type NoteFormValues = z.infer<typeof formSchema>

interface NotesFormProps {
    initialData: Note | null;
    handleSubmit: () => void;
}

const NotesForm: FC<NotesFormProps> = ({ initialData, handleSubmit }) => {
    const context = useContext(NoteContext);
    const { fetchNotes } = context;
    const [loading, setLoading] = useState(false)

    const form = useForm<NoteFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            title: "",
            description: "",
            tag: "general",
        }
    })

    const toastMessage = initialData ? "Note Updated Successfully" : "Note Created Successfully"
    const action = initialData ? "Save Changes" : "Create"

    const onsubmit = async (data: NoteFormValues) => {
        try {
            setLoading(true)
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token") || "",
                }
            }
            if (initialData) {
                await axios.put(`${HOST}/api/notes/updatenote/${initialData._id}`, data, options)
            } else {
                await axios.post(`${HOST}/api/notes/addnote`, data, options)
            }
            toast.success(toastMessage)
            fetchNotes()
        } catch (error) {
            toast.error("Something went wrong")
        }
        finally {
            setLoading(false)
            handleSubmit()
        }
    }

    return (
        <div className="container ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onsubmit)} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 md:gap-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder='Title'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tag"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tag</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder='Tag'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        disabled={loading}
                                        placeholder="Description"
                                        rows={10}
                                        cols={10}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2 mr-auto">
                        <Button
                            disabled={loading}
                            type="submit"
                        >
                            {action}
                        </Button>
                        <Button
                            disabled={loading}
                            type="reset"
                            onClick={() => form.reset()}
                        >
                            Reset
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default NotesForm;
