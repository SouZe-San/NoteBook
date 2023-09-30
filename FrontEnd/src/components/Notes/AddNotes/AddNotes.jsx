import React from "react";
import "./addNotes.scss";
import HeadTag from "./headTag";
import FormModel from "./FormModel";

const AddNotes = ({ setWantToAdd }) => {
  return (
    <div className="addNote_modal absolute flex flex-col justify-center items-center">
      <HeadTag />
      <FormModel cancelFunction={setWantToAdd} />
    </div>
  );
};

export default AddNotes;
