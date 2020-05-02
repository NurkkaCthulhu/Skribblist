const express = require('express');

const app = express();

app.use(express.static('./dist/skribblist'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/skribblist/'}),
);

app.listen(process.env.PORT || 8080);