const fetch = require('node-fetch');
const cheerio = require('cheerio');

let vlink = null;

function sayHello() {
    fetch("https://coursehunter.net/course/next-js",)
        .then(res => res.text())
        .then(html => {
            const parsedHTML = cheerio.load(html);
            const data = JSON.parse(parsedHTML('script').get()[0].children[0].data);
            vlink = data['@graph'][0].contentUrl.split('/')[4]
        })
}
sayHello();
module.exports = vlink;