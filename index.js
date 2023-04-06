const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

const port = 3000;


app.get('/', (req, res) => {
  res.send('Mi primer server en express');
});

app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query;
  const limit = size || 5;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt( faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Producto1',
    price: 1333
  });
})

app.listen(port, () => {
  console.log('Mi port ' + port);
})
