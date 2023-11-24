const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, '..')));

// Sample In-Memory Data Store (Replace with your data structure)
let dataStore = [];

// API Routes
app.get('../index.html', (req, res) => {
    res.json(dataStore);
});

app.post('../index.html', (req, res) => {
    dataStore.push(req.body);
    res.status(201).send('');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 9900;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
