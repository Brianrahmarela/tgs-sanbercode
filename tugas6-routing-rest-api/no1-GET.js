const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json()); 

const categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' },
  { id: 3, name: 'Olahraga' },
  { id: 4, name: 'Dapur' },
  { id: 5, name: 'Makanan' }
];

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
