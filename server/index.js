"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888

const {
  postNewUser,
  postNewEntry,
  getBrainDump,
  postNewBrainer,
  patchBrainer,
  getJournalEntries,
  postNewJournalEntry,
  getAffirmations,
  postNewAffirmation,
  getEvents,
  postNewEvent
} = require('./handlers');

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  // ---------------------------------
  .post('/newUser', postNewUser)
  .post('/newEntry', postNewEntry)

  .get('/getBrainDump', getBrainDump)
  .post('/newBrainer', postNewBrainer)
  .patch('/patchBrainer', patchBrainer)

  .get('/journalEntries/:date', getJournalEntries)
  .post('/newJournalEntry', postNewJournalEntry)

  .get('/affirmations', getAffirmations)
  .post('/newAffirmation', postNewAffirmation)

  .get('/getEvents', getEvents)
  .post('/newEvent', postNewEvent)

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
