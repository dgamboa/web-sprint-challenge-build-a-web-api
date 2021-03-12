const express = require('express');
// const projectsRouter = require('./projects/projects-router');
// const actionsRouter = require('./actions/actions-router');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json());
// server.use('api/projects', projectsRouter);
// server.use('api/actions', actionsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Use the endpoints for projects and actions in the api</h2>`);
});

module.exports = server;
