const express = require('express');
const PORT = 3002;

let app = express();
const db = require('../database/index.js');

app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => console.log('express listening on ', PORT));


//----------- ROUTES ----------------

//route for
app.get('/api/allBreedsSimilar', (req, res) => {
  //retreives limited data for all breeds, returns a promise containing array of objects
  db.retreiveSimilar()
    .then((breedInfoArray) => {
      res.send(breedInfoArray)
    })

});

app.get('/api/oneBreed', (req, res) => {
  console.log('req.query: ', req.query)
  //retreives all data for one breed
  let id = req.query.id;
  db.retreiveOne(id)
    .then((breedInfo) => {
      res.send(breedInfo[0])
    })
})

// app.get('/', (req, res) => {
//   res.end()
// })

