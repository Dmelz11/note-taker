const PORT = 3001;
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const api_routes = require('/routes/api-routes');
app.use(api_routes);
const html_routes = require('/routes/html-routes');
app.use(html_routes);

app.listen(PORT,()=>{
     console.log('Listening on port:${PORT}');
    });


