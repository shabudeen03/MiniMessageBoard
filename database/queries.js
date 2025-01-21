const pool = require("./pool.js");

const getMessageById = async (id) => {
    const { rows } = await pool.query("SELECT * FROM minimsgboard WHERE id=($1)", [id]);
    return rows[0];
};

const pushMessage = async (msg) => {
    await pool.query("INSERT INTO minimsgboard(title, text, username) VALUES ($1, $2, $3)", [msg.title, msg.text, msg.author]);
};

const getMessages = async () => {
    const { rows } = await pool.query("SELECT * FROM minimsgboard");
    return rows;
}

module.exports = { getMessageById, pushMessage, getMessages };