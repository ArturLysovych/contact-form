const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Test route');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
