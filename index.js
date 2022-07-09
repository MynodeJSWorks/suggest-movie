const express = require("express");
const suggestionsRouter = require("./routers/suggestionsRouter");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const server = express();
const cors = require("cors");

server.use(cors());
server.use(express.json());
server.use(logger);
server.use('/suggestions', suggestionsRouter);

server.get('/', (req, res) => {
    res.send('Main Page');
});

server.use(errorHandler);

server.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});