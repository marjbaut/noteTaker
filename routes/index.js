// IMPORT EXPRESS
const express = require('express');
// IMPORT MODULES NOTES
const notesRouter = require('./notes');
//  EXPORT APP
const app = express();

app.use ('/notes', notesRouter);

module.exports=app;