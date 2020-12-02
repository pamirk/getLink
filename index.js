let vlink = require('./cranjob');
const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

app = express();
// Schedule tasks to be run on the server.
app.get('/gl', (req, res, next) => {
    if (vlink !== null) {
        return res.send(vlink)
    } else {
        fetch("https://coursehunter.net/course/next-js",)
            .then(res => res.text())
            .then(html => {
                const parsedHTML = cheerio.load(html);
                const data = JSON.parse(parsedHTML('script').get()[0].children[0].data);
                vlink = data['@graph'][0].contentUrl.split('/')[4]
                return res.send(vlink)
            })
    }
});
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API available on ${port}`));
