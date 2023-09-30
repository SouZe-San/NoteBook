import React from "react";

// Style
import "./noteStyle.scss";

const Note = ({ note, editClicked }) => {
  return (
    <>
      <div className="card">
        <div className="note-heder flex justify-between">
          <h2 className="note_date">23.034.343</h2>
          <div className="option-icon flex gap-4">
            <div className="option-btn" onClick={() => editClicked(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"
                  fill="rgba(234,230,230,1)"
                ></path>
              </svg>
            </div>
            <div className="option-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"
                  fill=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h1 className="note-title">{note.title}</h1>
        <div className="description">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ut!</p>
          <p>Lorem ipsum dolor sit, amet </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing </p>
        </div>
        <div className="note-tags flex gap-2">
          <p className="tag">Daily</p> <p className="tag">Gym</p> <p className="tag"> Home</p>
        </div>
      </div>
    </>
  );
};

export default Note;
