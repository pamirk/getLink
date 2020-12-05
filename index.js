const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors');
app = express();
app.use(cors({origin: true}));
app.get('/', (req, res, next) => {
    return res.json("Welcome, the site is under Construction")
});

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API available on ${port}`));
