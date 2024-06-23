require('dotenv').config();

const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_NAME
});

client.connect();

app.get('/api/players', (req, res) => {
    client.query('SELECT * FROM "Players"', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result.rows);
        }
    });
});

app.get('/api/team_stats', (req, res) => {
    client.query('SELECT * FROM "team_stats"', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result.rows);
        } 
    })
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
