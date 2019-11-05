const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectoryPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
