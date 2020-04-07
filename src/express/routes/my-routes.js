'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const myRoutes = Router();

myRoutes.get(`/`, (req, res) => res.render(`my-tickets`));
myRoutes.get(`/comments`, (req, res) => res.render(`comments`));

module.exports = myRoutes;
