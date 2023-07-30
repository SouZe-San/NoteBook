import React, { useEffect, useState } from "react";

// importing components
import Navbar from "../../components/navbar/Navbar";
import IconBlock from "../../components/Notes/IconBlock";
import AddNotes from "../../components/Notes/AddNotes";
import Note from "../../components/Notes/Note";

// Style
import "./style.scss";
const NotesBlock = () => {
  const [wantToAdd, setWantToAdd] = useState(false);

  return (
    <div className="flex h-full ">
      <div className="flex-none w-1/5 min-w-[250px] h-full navBlock">
        <Navbar />
      </div>
      <div className="grow flex flex-col">
        <div className="icons_section">
          <IconBlock />
        </div>

        <div className="user_section">
          <section
            className="flex justify-between w-full items-center
          "
          >
            <div className="greeting ">
              <h1 className="inline">Welcome</h1> <span>user name</span>
            </div>
            <button
              onClick={() => {
                setWantToAdd(true);
              }}
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
