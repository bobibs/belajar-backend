// Import Global Module
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create App
const app = express();

// Test Connection Database
const db = require('./connections/index');
db.connect(err => {
	if (err) throw err;
	console.log('MySql connected...');
});

// Set Middleware (req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Cors (izin akses frontend ke backend)
app.use(cors());

// Set Routes (setting API backend)
const { userRouter } = require('./routes');
app.get('/', (req, res) => res.send('Hello from backend!'));
app.use('/users', userRouter);

// Set Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running on port : ${PORT}`));
