const express = require('express');

const app = express();

app.use(express.static('./dist/Skribblist'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Skribblist/'}),
);

app.listen(process.env.PORT || 8080);