const asyncHandler = require('express-async-handler');

const db = require('../database/queries.js');

const getMessages = asyncHandler(async (req, res) => {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
});

const getMessageById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const msg = await db.getMessageById(Number(id));

    if(msg) {
        res.render("message", { message: msg });
        return;
    }

    res.status(404).send("<h1>Page not found.</h1>");
});

const postNewMessage = asyncHandler(async (req, res) => {
    await db.pushMessage(req.body);
    res.redirect("/"); 
});

const displayNewMsgForm = asyncHandler(async (req, res) => {
    res.render("form", { 
        title: "Add Message", 
        heading: "Add a new message!", 
        submitBtn: "Post"
    });
})

module.exports = { getMessageById, getMessages, postNewMessage, displayNewMsgForm };
