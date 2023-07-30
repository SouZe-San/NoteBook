import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import AllRoutes from "../AllRoutes";
import NotesBlock from "./page/Notes/NotesBlock";

function App() {
  return (
    <>
      <Router>
        <NotesBlock />
        {/* <AllRoutes /> */}
      </Router>
    </>
  );
}

export default App;
