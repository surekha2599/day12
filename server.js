const express = require('express');
const server = express();
const port = 5004;

const items = [
   { id: 1, name: "jeans" },
   { id: 2, name: "kurthi" }
];

server.get('/', (req, res) => {
   res.end("server is running");
});

server.get('/product', (req, res) => {
   res.json(items);
});

server.listen(port, () => {
   console.log(`server is running on http://localhost:${port}`);
});
