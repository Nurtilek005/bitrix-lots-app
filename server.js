const express = require('express');
const app = express();
const path = require('path');

// Отдаём index.html
app.use(express.static(path.join(__dirname, 'public')));

// Отдаём manifest.json вручную
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

// Запуск
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
