const express = require('express');
const app = express();


const dotenv = require('dotenv');
dotenv.config();

const profile = require('./routers/profile.js');
const folders = require('./routers/folders.js');


app.use('/me', profile)
app.use('/folders', folders)


const port = Number(process.env.PORT);


if (port <= 0 || port >= 65536 || !Number.isInteger(port)) {
  throw new Error("Port must be between 1 and 65535 check PORT in .env");
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
