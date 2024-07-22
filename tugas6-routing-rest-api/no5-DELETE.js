const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
    { id: 3, name: 'Olahraga' },
    { id: 4, name: 'Dapur' },
    { id: 5, name: 'Makanan' }
];

app.delete('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(p => p.id !== categoryId);
    console.log('data categories yg sudah di delete', categories)
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
