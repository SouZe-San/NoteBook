import React, { useState } from "react";
import "./formStyle.scss";
const FormModel = ({ cancelFunction }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Pika BUUU");
    console.log(title, description, tags);
  };

  const cancelClick = (e) => {
    e.preventDefault();
    console.log("Class");
    cancelFunction(false);
  };
  return (
    <form
      onSubmit={handelSubmit}
      method="post"
      className="flex flex-col items-start gap-4 md:w-[80%] md:h-[70%]"
    >
      <div className="input">
        <label htmlFor="title">
          <h1 className="label">Title</h1>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Name of the Note"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="input ">
        <label htmlFor="body">
          <h1 className="label">Description</h1>
          <textarea
            type="text"
            name="body"
            value={description}
            placeholder="Description Of Note"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </label>
      </div>
      <div className="input">
        <label htmlFor="tags">
          <h1 className="label">
            Tags <span className="text-sm">{"{Separate by space}"} </span>
          </h1>
          <input
            type="text"
            name="tags"
            value={tags}
            placeholder="tags ex: business classNotes ..."
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
      </div>

      <div className="button_section">
        <button type="submit"> Add Note</button>
        <button onClick={cancelClick}>Cancel</button>
      </div>
    </form>
  );
};

export default FormModel;
