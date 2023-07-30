import React from "react";
import "./addNotes.scss";
const AddNotes = ({ setWantToAdd }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Pika BUUU");
  };

  const cancelClick = (e) => {
    e.preventDefault();
    console.log("Class");
    setWantToAdd(false);
  };

  return (
    <div className="addNote_modal absolute flex flex-col justify-center items-center">
      <h1 className="head-line"> Add New Note</h1>
      <form
        onSubmit={handelSubmit}
        method="post"
        className="flex flex-col items-start gap-4 md:w-[55%] md:h-[60%]"
      >
        <div className="input">
          <label htmlFor="title">
            <h1 className="label">Title</h1>
            <input type="text" name="title" placeholder="Name of the Note" />
          </label>
        </div>
        <div className="input ">
          <label htmlFor="body">
            <h1 className="label">Description</h1>
            <input type="text" name="body" placeholder="Description Of Note" />
          </label>
        </div>
        <div className="input">
          <label htmlFor="tags">
            <h1 className="label">
              Tags <span className="text-sm">{"{Separate by space}"} </span>
            </h1>
            <input type="text" name="tags" placeholder="tags ex: business classNotes ..." />
          </label>
        </div>

        <div className="button_section">
          <button type="submit"> Add Note</button>
          <button onClick={cancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
