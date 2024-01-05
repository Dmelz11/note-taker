//greating port variable and dependencies
const PORT = process.env.PORT ||3001;
const express = require('express');
const app = express();
// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require('./routes/apiRoutes');
app.use('/api',apiRoutes);
const htmlRoutes = require('./routes/htmlRoutes');
app.use('/',htmlRoutes);


app.listen(PORT,()=>{
     console.log(`Listening on port:${PORT}`);
    });


