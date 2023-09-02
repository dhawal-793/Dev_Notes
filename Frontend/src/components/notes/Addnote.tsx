import { useContext, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import noteContext from "@/context/Notes/noteContext";


const HOST = import.meta.env.VITE_HOST;


const formSchema = z.object({
  title: z.string().min(3, 'Title should be atleast 3 characters'),
  description: z.string().min(10, 'Description should be atleast 10 characters'),
  tag: z.string().default("general")
})

type AddNoteFormValues = z.infer<typeof formSchema>

const Addnote = () => {
  const context = useContext(noteContext);
  const { fetchNotes } = context;

  const [loading, setLoading] = useState(false)

  const form = useForm<AddNoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tag: "general",
    }
  })


  const onsubmit = async (data: AddNoteFormValues) => {
    try {
      setLoading(true)
      const options = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token") || "",
        }
      }
      await axios.post(`${HOST}/api/notes/addnote`, data, options)
      toast.success("Note Added Successfully")
      fetchNotes()
    } catch (error) {
      toast.error("Something went wrong")
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="container ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
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
              Add Note
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

export default Addnote;
