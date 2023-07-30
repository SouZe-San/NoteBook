import React from "react";
import "./addNotes.scss";
const AddNotes = ({ setWantToAdd }) => {
  const handelSubmit = () => {
    console.log("Pika BUUU");
  };

  const cancelClick = (e) => {
    e.preventDefault();
    console.log("Class");
    setWantToAdd(false);
  };

  return (
    <div className="addNote_modal absolute flex flex-col justify-center items-center">
      <form onSubmit={handelSubmit} method="post" className="flex flex-col items-start gap-4">
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
