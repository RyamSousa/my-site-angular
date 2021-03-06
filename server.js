const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/my-site-angular'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/my-site-angular/index.html');
})

app.listen(PORT, () => {
  console.log('Server run. Port: '+ PORT);
})
