let rndNum = Math.floor(Math.random() * 1000000);

const messages = [
    {
        id: rndNum,
        title: "Greeting",
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: ++rndNum,
        title: "Greeting",
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    } 
]; 

const getMessageById = async (id) => {
    return messages.find((msg) => msg.id === id);
};

const pushMessage = async (msg) => {
    const message = { id: ++rndNum, user: msg.author, title: msg.title, text: msg.text, added: new Date() };
    messages.push(message);
};

const getMessages = async () => {
    return messages;
}

module.exports = { getMessageById, pushMessage, getMessages };