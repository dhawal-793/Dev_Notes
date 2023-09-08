import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CaseLower, CaseSensitive, CaseUpper, Copy, ListMinus, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Heading from "@/components/ui/heading";
import ToolTipBox from "@/components/ui/tool-tip-box";

const Textutils = () => {

  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handelUperCase = () => {
    const newtext = text.toUpperCase();
    setText(newtext);
  };

  const handelLowerCase = () => {
    const newtext = text.toLowerCase();
    setText(newtext);
  };

  const handelCaptalize = () => {
    const wordsArray = text.split(" ");
    let newtext = "";
    wordsArray.forEach((element) => {
      newtext +=
        element.substring(0, 1).toUpperCase() +
        element.substring(1).toLowerCase() +
        " ";
    });
    setText(newtext.slice(0, -1));
  };

  const handleExtraSpaces = () => {
    const newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const handelReset = () => {
    setText("");
  };

  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    text.length > 0 ? toast.success("Text copied to Clipboard") : toast.error("Plesase Enter text to copy.")
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {

    if (!localStorage.getItem("token")) navigate("/login");
  }, []);


  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return (
    <div className="container py-10">
      <Heading title="TextUtils" description="You Personal Text debugger" />
      <Separator className="mt-2 mb-4" />
      <Textarea
        value={text}
        rows={10}
        cols={14}
        placeholder="Your text here..."
        onChange={handleTextChange}
      />
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
        <ToolTipBox tip="Convert to Uppercase">
          <Button onClick={handelUperCase} size="icon">
            <CaseUpper />
          </Button>
        </ToolTipBox>
        <ToolTipBox tip="Convert to Lowercase">
          <Button onClick={handelLowerCase} size="icon">
            <CaseLower />
          </Button>
        </ToolTipBox>
        <ToolTipBox tip="Capatilize">
          <Button onClick={handelCaptalize} size="icon">
            <CaseSensitive />
          </Button>
        </ToolTipBox>
        <ToolTipBox tip="Copy Text">
          <Button onClick={handelCopy} size="icon">
            <Copy />
          </Button>
        </ToolTipBox>
        <ToolTipBox tip="Reset">
          <Button onClick={handelReset} size="icon">
            <RotateCcw />
          </Button>
        </ToolTipBox>
        <ToolTipBox tip="Remove Extra Spaces">
          <Button onClick={handleExtraSpaces} size="icon">
            <ListMinus />
          </Button>
        </ToolTipBox>
      </div>
    </div>
  );
};


export default Textutils;
