import React from "react";
import FormModel from "../AddNotes/FormModel";

const EditNotes = ({ editClicked }) => {
  return (
    <div className="editSection absolute flex flex-col justify-center items-center">
      <FormModel cancelFunction={editClicked} />
    </div>
  );
};

export default EditNotes;
