const request = require('request');
const cheerio = require('cheerio');

function getSearchList() {
    return new Promise((resolve, reject) => {
        const data = request({
            url: 'https://m.shiyua.com/search/',
            method: 'GET',
            headers: {'Content-Type': 'text/json'}
        }, (error, response, body) => {
            const $ = cheerio.load(body);
            const homePageArr = [];
            $('.filter-nav:last-child').children('.filter-item').each((index, element) => {
                if (index !== 0) {
                    let obj = {};
                    obj.label = $(element).children('label').html();
                    const ul = $(element).children('ul');
                    obj.typelist = []
                    ul.children().each((liIndex, liElement) => {
                        let newObj = {};
                        newObj.type = $(liElement).children().html();
                        newObj.url = 'https://m.shiyua.com/' + $(liElement).children().attr('href');
                        obj.typelist.push(newObj);
                    })
                    homePageArr.push(obj);
                }
            })
            if (error) {
                reject(error)
            } else {
                resolve(homePageArr)
            }
        })
    })
}

module.exports = getSearchList;