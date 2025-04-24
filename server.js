const express = require('express');
const app = express();
const path = require('path');

// Раздаёт файлы из папки public/
app.use(express.static('public'));

// Отдаёт HTML при открытии корня сайта
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Запускает сервер на порту 3000
app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});
