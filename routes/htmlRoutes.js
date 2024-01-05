const router = require('express').Router();
const path = require('path');
//creating route to return notes in notes.html file
router.get('/notes',(req, res)=>{
        res.sendFile(path.join(__dirname,'../public/notes.html'));
    });
//route to return index.html file
router.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    
module.exports = router;    
