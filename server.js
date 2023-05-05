const express =require ('express');
const path = require( "path");
const app = express();
const PORT =process.env.PORT || 3001;
const dbFolder= require('./db/db.json')

// static works hre because it wont change.
app.use(express.static('public'));

app.get('/api/notes', (req,res)=>
res.json(dbFolder))

// app.post
app.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/notes.html'))
}

)
// app.get('/notes',routeFolder)

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
