//@ Load All Necessary Modules
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//@ Load Own-Create Module
const Notes = require("../models/Notes");

// @ MiddleWares
const fetchUserDate = require("../middleware/fetchUserDate");

// >>>>>  For Accessing Any notes "LOG In Required" <<<<<<<<

//@  ROUTER-1:  for Fetch ALl Notes of the user --  {'Path', middleware, callBack()}
//^ the Path of this request : /api/notes/fetchallnotes

router.get("/fetchallnotes", fetchUserDate, async (req, res) => {
  try {
    // Finding Notes Corresponding the User ID
    const notes = await Notes.find({ user: req.user.id });

    // Send The All Notes As Response
    res.json(notes);
  } catch (error) {
    res.status(500).send("Some Internal Server Error Occurred");
  }
});

//@  ROUTER-2:  for Create Notes Block For User -- {'Path', middleware, Validation , callBack()}
//^ the Path of this request : /api/notes/createnotes

router.post(
  "/createnotes",
  fetchUserDate,
  [
    //  Title must have minimum 5 chars
    body("title", "Enter a valid Title").isLength({ min: 5 }),

    //  Description is Not Necessary all  time
    body("description", "Enter a valid Description").isLength({ min: 10 }),
  ],
  async (req, res) => {
    try {
      //  First collect all details of note form body of request
      const { title, description, tag } = req.body;

      // If the title is not valid then throw an error
      const errors = validationResult(req); // check is valid or not
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Then create a object that contain all thing
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      //  Save the note in a variable
      const saveNotes = await note.save();
      //  Send as response
      res.json(saveNotes);
    } catch (error) {
      console.log(error);
      res.status(500).send("Some Internal Server Error Occurred");
    }
  }
);

//@  ROUTER-2:  for Update the Existing Notes  --
//^ the Path of this request : /api/notes/noteupdate/:id

router.put(
  "/noteupdate/:id",
  fetchUserDate,
  [
    //  Title must have minimum 5 chars
    body("title", "Enter a valid Title").isLength({ min: 5 }),

    //  Description is Not blank
    body("description", "Enter a valid Description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Collect data/changes from the request body
    const { title, description, tag } = req.body;

    // Create a note named object,... this will carry changing data
    const newNote = {};

    // if user want to change the title or something
    // Is title present in req-body means ,
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //  Find the Notes And Check weather the notes Exist or not
    let note = await Notes.findById(req.params.id);
    // If note not present in data base
    if (!note) {
      return res.status(404).send(" Notes not Found!! ");
    }

    // Now Check is it Really original owner or Other if Not Send A massage
    if (note.user.toString() != req.user.id) {
      return res.status(401).send(" Unauthorized Person not Allowed !!");
    }

    // If ALl Check Pass Then UPDATE the Notes   -- 0- -- This method take 1.id and 2. object
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

    res.json({ note });
  }
);

//@  ROUTER-2:  for Delete the notes --
//^ the Path of this request : /api/notes/notedelete/:id

router.delete("/notedelete/:id", fetchUserDate, async (req, res) => {
  //  Find the Notes And Check weather the notes Exist or not
  let note = await Notes.findById(req.params.id);
  // If note not present in data base
  if (!note) {
    return res.status(404).send(" Notes not Found!! ");
  }

  // Now Check is it Really original owner or Other if Not Send A massage
  if (note.user.toString() != req.user.id) {
    return res.status(401).send(" Unauthorized Person not Allowed !!");
  }

  // If ALl Check Pass Then DELETE the Notes   -- 0- -- This method take 1.id
  note = await Notes.findByIdAndDelete(req.params.id);

  res.json({ success: "Successfully the Note Deleted!!" });
});
module.exports = router;
