const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const apis = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apis);
app.use('/', html);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);