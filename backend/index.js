const express = require('express');
const path = require('path');

const PATH_TO_FRONTEND = path.join(__dirname, '../', 'frontend');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(PATH_TO_FRONTEND));

app.get('/', (req, res) =>{
    res.sendFile(path.join(PATH_TO_FRONTEND + '/build/index.html'));
});

app.listen(PORT);

console.log(`Sever running on port: ${PORT} serving files from ${PATH_TO_FRONTEND}`);