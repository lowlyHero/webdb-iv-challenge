const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

module.exports = server;