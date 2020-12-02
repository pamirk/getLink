const cron = require('node-cron');
const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

app = express();
// Schedule tasks to be run on the server.
let vlink = null

app.get('/gl', (req, res, next) => {
    return res.send(vlink)
});

cron.schedule('0 0 */3 * * *', function () {
    fetch("https://coursehunter.net/course/next-js",)
        .then(res => res.text())
        .then(html => {
            const parsedHTML = cheerio.load(html);
            const data = JSON.parse(parsedHTML('script').get()[0].children[0].data);
            vlink = data['@graph'][0].contentUrl.split('/')[4]
        })
});
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API available on ${port}`));
