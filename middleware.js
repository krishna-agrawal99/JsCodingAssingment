const express = require('express');
const app = express();

// Middleware function to log incoming requests
const logMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  // Log the information
  console.log(`[${timestamp}] ${method} ${url}`);

  // Pass the request to the next middleware or route handler
  next();
};

// Use the middleware for all routes
app.use(logMiddleware);

// Define your API routes here
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 9494;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
