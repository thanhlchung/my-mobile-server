const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello from my Android-built server!');
});

app.listen(port, () => {
  console.log(`Server live on port ${port}`);
});
