const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const app = express();
const { requireAuth } = require('./middleware/authMiddleware')
// Serve static files before other middleware
app.use(express.static('public'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

// View engine
app.set('view engine', 'ejs');

// Database connection
const MONGODB_URL = 'mongodb://127.0.0.1:27017/jwt';
const PORT = 3000;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Add this line
  })
  .then(() => console.log('DATABASE CONNECTED'))
  .catch(error => console.error('Error connecting to the database:', error));


// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes)
// Use authRoutes

// Start the server 
app.listen(PORT, () => console.log('Server is running on port', PORT));

// routes

