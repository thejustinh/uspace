const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // parses incoming request bodies
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to Database 
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('connected', () => { // On connection
    console.log('Connected to database', config.database)
})
mongoose.connection.on('error', (err) => {
    console.log('Database error:', err)
})

const app = express();

const users = require('./routes/users')

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());
app.use('/users', users);

/* Set Static Folder:
    This is a place to put client side files which will be 
    our entire Angular 2 app when we are done) */
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json())

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport); // Passing passport variable into the passport.js file function

app.use('/users', users)

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

// Start Server
app.listen(port, () => {
    console.log('Server started on port', port)
});
