const router = require('express').Router();
const fs = require('fs');
const { parse } = require('path');
const { stringify } = require('querystring');
const dbFolder = require('../db/db.json')
// get
router.get('/', (req, res) =>{
    let data =  fs.readFileSync('./db/db.json', 'utf8' );
    res.json(JSON.parse(data))
});

router.post('/', (req, res) => {
    // post was received.
    console.info(`${req.method} request received`);
    // destructuring object

    const {title, text} = req.body;
    if(title && text){
        const newNote = {
            title,
            text
        };
    let data =  fs.readFileSync('./db/db.json', 'utf8',4);
    
    const parsedNotes = JSON.parse(data);
    // addin ne review at the end
    parsedNotes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), (err,text) =>{
        if (err) {
        console.error(err);
        return;
    } console.log (newNote)}
    )
    console.log ('succes');

    res.json(data);
}});
       

module.exports = router;