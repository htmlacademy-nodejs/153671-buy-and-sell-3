'use strict';

const {Router} = require(`express`);
// eslint-disable-next-line new-cap
const mainRouter = Router();

mainRouter.get(`/`, (req, res) => res.send(`/`));
mainRouter.get(`/register`, (req, res) => res.send(`/register`));
mainRouter.get(`/login`, (req, res) => res.send(`/login`));
mainRouter.get(`/search`, (req, res) => res.send(`/search`));

module.exports = mainRouter;
