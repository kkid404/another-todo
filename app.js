const express = require('express');
const app = express();


const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const profile = require('./routers/profile.js');
const folders = require('./routers/folders.js');


app.use('/me', profile)
app.use('/folders', folders)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});