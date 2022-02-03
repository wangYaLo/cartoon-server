const request = require('request');
const cheerio = require('cheerio');

function getRankPage() {
    return new Promise((resolve, reject) => {
        const data = request({
            url: 'https://m.shiyua.com/rank/',
            method: 'GET',
            headers: {'Content-Type': 'text/json'}
        }, (error, response, body) => {
            const $ = cheerio.load(body);
            const homePageArr = [];
            $('.UpdateList').children('.itemBox').each((index, element) => {
                let obj = {};
                obj.imgUrl = $(element).children('.itemImg').children().children().attr('src');
                obj.cartoonName = $(element).children('.itemTxt').children().html();
                obj.cartoonUrl = $(element).children('.itemTxt').children().attr('href');
                homePageArr.push(obj);
            }) 
            if (error) {
                reject(error)
            } else {
                resolve(homePageArr)
            }
        })
    })
}

module.exports = getRankPage;