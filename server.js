const PORT = process.env.PORT ||3001;
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const apiRoutes = require('/routes/apiRoutes');
app.use(apiRoutes);
const htmlRoutes = require('/routes/htlmRoutes');
app.use(htmlRoutes)

app.listen(PORT,()=> console.log('Listening on port:${PORT}'));

