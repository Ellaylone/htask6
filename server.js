'use strict';

let express = require('express');
let app = express();

app.set('port', 9000);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});
