'use strict';

const express = require(`express`);
const router = require(`./routes`);

// Зафиксируем порт для сервера
const DEFAULT_PORT = 8080;

const app = express();
app.use(router);

// Запуск сервера
app.listen(DEFAULT_PORT);
