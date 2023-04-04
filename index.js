const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Mi primer server en express');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'Producto1',
    price: 1333
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
})
