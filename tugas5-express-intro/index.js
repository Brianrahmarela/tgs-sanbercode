const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware 
app.use((req, res, next) => {
    // console.log(req)
    // console.log(res)
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    const response = {
        message: "Success fetch message",
        data: "Hello World!"
    };
    res.send(response);
});

app.get('/user', (req, res) => {
    const response = {
        message: "Success fetch user",
        data: {
            id: 1,
            name: "Budi",
            username: "budidu",
            email: "budidu@mail.com"
        }
    }
    res.send(response);
});

app.get('/about', (req, res) => {
    res.send('About Page');
  });
  
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
