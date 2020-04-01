'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const myRoutes = Router();

myRoutes.get(`/`, (req, res) => res.send(`/my`));
myRoutes.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = myRoutes;
