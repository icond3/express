// Curso express iconde
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Mi primer server en express');
});

app.listen(port, () => {
  console.log('Mi port ' + port);
})

routerApi(app)
