const express = require('express');
const path = require("path");
const app = express();
const fs = require('fs');

// router folder
const routerFolder = require('./routes')

const PORT = process.env.PORT || 3001;
// json folder
const dbFolder = require('./db/db.json')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// localhost:3001/api
app.use('/api', routerFolder)

// localhost:3001/
app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
  // res.json(dbFolder)
})
app.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received`);
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text
    };
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNote = JSON.parse(data);
        // Add a new review
        parsedNote.push(newNote);
        fs.writeFile('./db/db.json',
          JSON.stringify(parsedNote, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully added a note!')
        )}
    })
    const response = {
      status: 'success',
      body: newNote,
    };
    console.log(response);
    res.status(201).json(response);

  } else {
    res.status(500).json('Error in adding a note');
  }
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);