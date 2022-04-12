const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




app.use(require('./routes'));


db.once('open', () => {
  console.log(`pizza db live`)
  app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
})

