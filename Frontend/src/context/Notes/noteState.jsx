import { useState } from "react";
import NoteContext from "./noteContext";
import { toast } from "react-hot-toast";
import { AlertCircle } from "lucide-react"
const NoteState = (props) => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const host = import.meta.env.VITE_HOST;
  console.log(host);
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  const WarningIcon = <AlertCircle className="text-yellow-400" size={22} />
  // const [alert, setAlert] = useState({
  //   show: false,
  //   type: "",
  //   message: "",
  // });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  // const toggleAlert = (recievedmessage, recievedtype) => {
  //   setAlert({
  //     message: recievedmessage,
  //     type: recievedtype,
  //     show: true,
  //   });
  //   setTimeout(() => {
  //     setAlert({
  //       message: "",
  //       type: "",
  //       show: false,
  //     });
  //   }, 4000);
  // };

  const fetchNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json.notes);
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // ADD A NEW NOTE

  const addNote = async (noteObject) => {
    let { title, description, tag } = noteObject;
    tag = tag.trim();
    title = title.trim();
    description = description.trim();
    tag = tag === "" || tag === " " ? "general" : tag;
    const dlength = description.length;
    const tlength = title.length;
    if (
      (description === "" || description === " ") &&
      (title === "" || title === " ")
    ) {
      toast("Title and Description required", { icon: WarningIcon });
    } else if (title === "" || title === " ") {
      toast("Title required", { icon: WarningIcon });
    } else if (description === "" || description === " ") {
      toast("Description required", { icon: WarningIcon });
    } else if (dlength < 10 && tlength < 3) {
      toast("Description must be 10 characters long and title must be 3 characters long", { icon: <AlertCircle className="text-yellow-400" size={45} /> });
    } else if (dlength < 10) {
      toast("Description must be 10 characters ", { icon: WarningIcon });
    } else if (tlength < 3) {
      toast("Title must be 3 characters long", { icon: WarningIcon });
    } else {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, tag, description }),
      });
      const json = await response.json();
      if (json.success) {
        toast.success(json.message);
        fetchNotes();
      } else {
        toast.error(json.message);
      }
    }
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // EDIT AN EXISTING NOTE

  const editNote = async (id, noteObject) => {
    let editednote = {
      title: noteObject.edittitle.trim(),
      description: noteObject.editdescription.trim(),
      tag: noteObject.edittag.trim(),
    };
    const dlength = editednote.description.length;
    const tlength = editednote.title.length;
    editednote.tag =
      editednote.tag === "" || editednote.tag === " "
        ? "general"
        : editednote.tag;
    if (
      (editednote.description === "" || editednote.description === " ") &&
      (editednote.title === "" || editednote.title === " ")
    ) {
      toast("Title and Description required", { icon: WarningIcon });
    } else if (editednote.title === "" || editednote.title === " ") {
      toast("Title required", { icon: WarningIcon });
    } else if (
      editednote.description === "" ||
      editednote.description === " "
    ) {
      toast("Description required", { icon: WarningIcon });
    } else if (dlength < 10 && tlength < 3) {
      toast("Description must be 10 characters long and title must be 3 characters long", { icon: <AlertCircle className="text-yellow-400" size={45} /> });
    } else if (dlength < 10) {
      toast("Description must be 10 characters ", { icon: WarningIcon });
    } else if (tlength < 3) {
      toast("Title must be 3 characters long", { icon: WarningIcon });
    } else {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(editednote),
      });
      const json = await response.json();
      if (json.success) {
        toast.success(json.message);
        fetchNotes();
      } else {
        toast.error(json.message);
      }
    }
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // DELETE AN EXISTING NOTE

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.message);
      fetchNotes();
    } else {
      toast.error(json.message);
    }
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <NoteContext.Provider
      value={{ notes, editNote, addNote, deleteNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default NoteState;
