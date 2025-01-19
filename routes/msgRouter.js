const { Router } = require('express');
const msgRouter = Router();
const msgController = require('../controllers/messageController.js');

msgRouter.get("/", msgController.getMessages);

msgRouter.get("/new", msgController.displayNewMsgForm);
  
msgRouter.post("/new", msgController.postNewMessage);

msgRouter.get("/view/:id", msgController.getMessageById);

msgRouter.get("*", (req, res) => {
    res.status(404).send("<h1>404 Error!</h1><h2>Page not found.</h2>");
});

module.exports = { msgRouter };