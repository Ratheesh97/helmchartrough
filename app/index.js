const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Vanakkam! Helm Chart & Azure Pipeline successful-a work aaguthu!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
