const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let categories = [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }].

app.get('/categories/search', (req, res) => {
    const { name } = req.query;
    const filteredCategories = categories.filter(cat => cat.name.toLowerCase().includes(name.toLowerCase()));

    res.json(filteredCategories);
});

app.listen(port, () => {
    console.log(`Server is running at <http://localhost>:${port}`);
});