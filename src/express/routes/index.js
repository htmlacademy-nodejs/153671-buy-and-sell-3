'use strict';
const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const router = Router();
// Маршруты приложения мы опишем в отдельных файлах.
// Для определения маршрутов мы воспользуемся Router().
// Примеры маршрутов будут продемонстрированы ниже по тексту.
const offersRoutes = require(`./offers-routes`);
const myRoutes = require(`./my-routes`);
const mainRoutes = require(`./main-routes`);

// Подключим созданные маршруты
router.use(`/offers`, offersRoutes);
router.use(`/my`, myRoutes);
router.use(`/`, mainRoutes);

module.exports = router;
