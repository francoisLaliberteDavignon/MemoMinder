"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888;

const {
  postNewUser,
  getBrainDump,
  postNewBrainer,
  scheduleBrainer,
  patchBrainer,
  deleteBrainer,
  getJournalEntries,
  postNewJournalEntry,
  getAffirmations,
  postNewAffirmation,
  getReminders,
  getRemindersByDate,
  postNewReminder,
  deleteReminder
} = require('./handlers');

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  // ---------------------------------
  .post('/newUser', postNewUser)

  .get('/getBrainDump', getBrainDump)
  .post('/newBrainer', postNewBrainer)
  .post('/scheduleBrainer/:_id', scheduleBrainer)
  .patch('/patchBrainer', patchBrainer)
  .delete('/delete/brainer/:_id', deleteBrainer)

  .get('/journalEntries/:date', getJournalEntries)
  .post('/newJournalEntry', postNewJournalEntry)

  .get('/affirmations', getAffirmations)
  .post('/newAffirmation', postNewAffirmation)

  .get('/getReminders', getReminders)
  .get('/getReminders/:date', getRemindersByDate)
  .post('/newReminder', postNewReminder)
  .delete('/delete/reminder/:_id', deleteReminder)

  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(port, () => console.log(`Listening on port ${port}`));
