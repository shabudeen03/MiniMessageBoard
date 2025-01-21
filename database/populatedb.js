const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS minimsgboard (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR ( 255 ) NOT NULL,
        text VARCHAR ( 255 ) NOT NULL,
        username VARCHAR ( 255 ) NOT NULL,
        added date NOT NULL DEFAULT CURRENT_DATE
    );

    INSERT INTO minimsgboard(title, text, username) VALUES
        ('Greetings', 'Hi there!', 'Amando'),
        ('Hello', 'Good Morning!', 'Charles'),
        ('Welcome', 'Welcome Back.', 'Hunter');
`;

async function main() {
    console.log("Seeding ...");
    const client = new Client({
        host: "localhost", //or wherever database is hosted
        user: "<your_username>",
        database: "top_users",
        password: "<your_pwd>",
        port: 5432 //default port 
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done.");
}

main();
