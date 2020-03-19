const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

const amqp = require('./amqp');


// Middleware
app.use(bodyParser.json());


// handle the request
app.post('/amqp', async function (req, res) {
  amqp.getInstance()
    .then(broker => {
      console.log(broker);
    })
  res.send('WORKS');
});

// Start the server
const PORT = 3000;
server = http.createServer(app);
server.listen(PORT, "localhost", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.info("Listening on port %s.", PORT);
  }
});
