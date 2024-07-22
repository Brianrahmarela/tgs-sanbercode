const express = require('express');
const app = express();
const port = 3000;

const categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
    { id: 3, name: 'Olahraga' },
    { id: 4, name: 'Dapur' },
    { id: 5, name: 'Makanan' }
];

app.get('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(cat => cat.id === categoryId);

    if (!category) {
        res.status(404).json({ error: 'Category not found' });
    } else {
        res.json(category);
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
