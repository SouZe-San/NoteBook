import React, { useRef, useState } from "react";

// importing components
import Navbar from "../../components/navbar/Navbar";
import IconBlock from "../../components/Notes/IconBlock/IconBlock";
import AddNotes from "../../components/Notes/AddNotes/AddNotes";
import Note from "../../components/Notes/Note/Note";

// Style
import "./style.scss";
import EditNotes from "../../components/Notes/EditNotes/EditNotes";
const NotesBlock = () => {
  const [wantToAdd, setWantToAdd] = useState(false);
  const [editClick, editClicked] = useState(false);
  const navRef = useRef(null);
  const [slideOut, setSlideOut] = useState(true);

  const slideTheNav = () => {
    if (window.innerWidth <= 760) {
      if (slideOut) {
        // Nav Come out
        navRef.current.style.transform = "translateX(0)";
        setSlideOut(false);
      } else {
        // nav goes in
        navRef.current.style.transform = "translateX(-100%)";
        setSlideOut(true);
      }
    }
  };

  // DataObject

  const note = {
    title: "Title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ut!",
    tags: " Daily Gym Home",
  };

  return (
    <div className="flex h-full main_bg">
      <div className="flex-none w-1/5 min-w-[250px] h-full navBlock" ref={navRef}>
        <Navbar slideTheNav={slideTheNav} />
      </div>
      <div className="grow flex flex-col note-block">
        <div className="icons_section">
          <div className="blur-bg"></div>
          <IconBlock slideTheNav={slideTheNav} />
        </div>

        <div className="note-scroll-section">
          <div className="user_section pl-5">
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
                type="button"
              >
                {" "}
                + Add Notes
              </button>
            </section>

            {wantToAdd && <AddNotes setWantToAdd={setWantToAdd} />}
            {editClick && <EditNotes editClicked={editClicked} />}
          </div>
          <div className="notesSection pt-12 px-8 ">
            <div className="note-box grid lg:grid-cols-3 grid-cols-2 gap-8 pb-4">
              <Note note={note} editClicked={editClicked} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesBlock;
