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

app.put('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    console.log(categoryId)
    const categoryIndex = categories.findIndex(p => p.id === categoryId);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = { id: categoryId, ...req.body };
        res.json(categories[categoryIndex]);
        console.log('categories data dummy terupdate:', categories)
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
