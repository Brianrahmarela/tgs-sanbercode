const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let categories = [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }]

app.get('/categories/:category', (req, res) => {
    const { category } = req.params;
    const { name } = req.query;

    // Filter produk berdasarkan kategori
    let filteredCategories = categories.filter(cat => cat.category.toLowerCase() === category.toLowerCase());

    // Jika query string name ada, tambahkan pencarian berdasarkan nama
    if (name) {
        filteredCategories = filteredCategories.filter(cat => cat.name.toLowerCase().includes(name.toLowerCase()));
    }

    res.json(filteredCategories);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});