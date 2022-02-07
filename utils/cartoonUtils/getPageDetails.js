const request = require('request');
const cherrio = require('cheerio');

function pageDetails(url) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'text/json'
            }
        }, (error, response, body) => {
            const $ = cherrio.load(body);
            const Arr = [];
            $('.Drama').children().each((index, element) => {
                let obj = {};
                obj.name = $(element).children().children().html();
                obj.url = $(element).children().attr('href');
                Arr.push(obj)
            })
            if (error) {
                reject(error)
            } else {
                resolve(Arr)
            }
        })
    })
}

module.exports = pageDetails;