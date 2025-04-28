const express = require('express');
const path = require('path');
const app = express();

// Отдаём статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Отдаём manifest.json по запросу GET /manifest.json
// ВАЖНО: тут лежит описание приложения для Битрикса
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

// Запуск сервера на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
