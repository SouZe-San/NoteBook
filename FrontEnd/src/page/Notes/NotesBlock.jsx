import React, { useEffect, useState } from "react";

// importing components
import Navbar from "../../components/navbar/Navbar";
import IconBlock from "../../components/Notes/IconBlock/IconBlock";
import AddNotes from "../../components/Notes/AddNotes/AddNotes";
import Note from "../../components/Notes/Note/Note";

// Style
import "./style.scss";
const NotesBlock = () => {
  const [wantToAdd, setWantToAdd] = useState(false);

  return (
    <div className="flex h-full ">
      <div className="flex-none w-1/5 min-w-[250px] h-full navBlock">
        <Navbar />
      </div>
      <div className="grow flex flex-col pl-5">
        <div className="icons_section">
          <IconBlock />
        </div>

        <div className="user_section">
          <section
            className="flex justify-between w-full items-center pr-6 md:pr-16
          "
          >
            <div className="greeting ">
              <h1 className="inline text-[2rem] md:text-5xl">Welcome</h1> <span>user name</span>
            </div>
            <button
              onClick={() => {
                setWantToAdd(true);
              }}
              className="p-[5px] md:px-4"
            >
              {" "}
              + Add Notes
            </button>
          </section>

          {wantToAdd && <AddNotes setWantToAdd={setWantToAdd} />}
        </div>

        <div className="notesSection ">
          <div className="Note">Your DUcj </div>
          <div className="Note">Your DUcj </div>
          <div className="Note">Your DUcj </div>
          <div className="Note">Your DUcj </div>
        </div>
      </div>
    </div>
  );
};

export default NotesBlock;
