const express = require('express');
const cors = require('cors');
const app = express();

require('./src/Routes/index.js')(app);

app.use(cors());
app.use(express.json());
app.listen(3333);

