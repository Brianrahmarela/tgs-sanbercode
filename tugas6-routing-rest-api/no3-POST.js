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

app.post('/categories', (req, res) => {
    const newCategory = req.body;

    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;
    categories.push(newCategory);

    res.status(201).json(newCategory);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

// notes:
// newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;

// categories.length memeriksa jml array categories sudah ada isinya atau masih kosong.
// categories[categories.length - 1] mengakses elemen terakhir dari array categories, ({ id: 5, name: 'Makanan' }).
// categories[categories.length - 1].id mengambil nilai id dari elemen terakhir tersebut.
// newProduct.id adalah properti id yang ditambahkan ke newProduct yang merupakan kategori baru, ({ name: 'Pakaian', id: 6 }).
// Operator ternary (? :) digunakan di sini untuk menentukan nilai id untuk kategori baru:
// Jika categories.length tidak nol (artinya array categories tidak kosong), maka newProduct.id diatur menjadi
//  categories[categories.length - 1].id + 1. Ini berarti ID kategori baru adalah ID terakhir dalam array categories ditambah satu yaitu id: 6.
// Jika categories.length adalah nol (artinya array categories kosong), maka newProduct.id diatur menjadi 1, menetapkan ID pertama untuk kategori baru.