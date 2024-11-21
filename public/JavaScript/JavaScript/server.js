// Import the required modules
const express = require('express'); // Express is a web framework for Node.js
const path = require('path'); // Path is used to handle and transform file paths

// Create an instance of an Express app
const app = express();

// Middleware to serve static files
// This tells Express to serve files (HTML, CSS, JavaScript, images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
// When the user navigates to "/", serve the "index.html" file from the "public/html" folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

// Start the server
const PORT = 3000; // Define the port where the server will run (3000 is commonly used for development)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log a message when the server starts
});
