const express = require('express');
const router = express.Router();
//  router.use(express.static('public/notes.html'));
router.get('/notes', (req,res)=>{
    res.send('notes list')
   })

// router.get('/new', (req,res)=>{
//     res.send('notes newlist')
// })
module.exports = router 