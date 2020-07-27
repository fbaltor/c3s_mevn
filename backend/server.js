const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Creating app
const app = express();

// Setup the cors configuration and enabling it as middleware
const corsOptions = {
  origin: 'http://localhost:3001', // allow connections from this host (frontend server)
};

app.use(cors(corsOptions));

// Enabling parsing of request of content-type
// - application/json
app.use(bodyParser.json());

// - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Calling the connect() method of the database object (db)
const db = require('./app/models');
// importing database model
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

// TEST: every GET request for "/" is answered with the json below
app.get('/', (req, res) => {
  res.json({ message: 'GET test worked' });
});

// Import routes
require('./app/routes/transactions.routes')(app);

// Set port and start listening for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
