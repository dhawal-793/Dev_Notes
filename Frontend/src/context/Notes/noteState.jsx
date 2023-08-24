import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const host = import.meta.env.VITE_HOST;
  console.log(host);
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const toggleAlert = (recievedmessage, recievedtype) => {
    setAlert({
      message: recievedmessage,
      type: recievedtype,
      show: true,
    });
    setTimeout(() => {
      setAlert({
        message: "",
        type: "",
        show: false,
      });
    }, 4000);
  };
  
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
      toggleAlert("Title and Description required", "warning");
    } else if (title === "" || title === " ") {
      toggleAlert("Title required", "warning");
    } else if (description === "" || description === " ") {
      toggleAlert("Description required", "warning");
    } else if (dlength < 10 && tlength < 3) {
      toggleAlert(
        "Description must be 10 characters long and title must be 3 characters long",
        "warning"
      );
    } else if (dlength < 10) {
      toggleAlert("Description must be 10 characters ", "warning");
    } else if (tlength < 3) {
      toggleAlert("Title must be 3 characters long", "warning");
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
        toggleAlert(json.message, "success");
        fetchNotes();
      } else {
        toggleAlert(json.message, "danger");
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
    editednote.tag =
      editednote.tag === "" || editednote.tag === " "
        ? "general"
        : editednote.tag;
    if (
      (editednote.description === "" || editednote.description === " ") &&
      (editednote.title === "" || editednote.title === " ")
    ) {
      toggleAlert("Title and Description required", "warning");
    } else if (editednote.title === "" || editednote.title === " ") {
      toggleAlert("Title required", "warning");
    } else if (
      editednote.description === "" ||
      editednote.description === " "
    ) {
      toggleAlert("Description required", "warning");
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
        toggleAlert(json.message, "success");
        fetchNotes();
      } else {
        toggleAlert(json.message, "danger");
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
      toggleAlert(json.message, "success");
      fetchNotes();
    } else {
      toggleAlert(json.message, "danger");
    }
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <NoteContext.Provider
      value={{ notes, editNote, addNote, deleteNote, fetchNotes, alert }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default NoteState;
