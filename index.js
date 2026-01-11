const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>farm-management-app</h1><p>Minimal Express scaffold is running.</p>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
