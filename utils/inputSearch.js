const request = require('request');
const cheerio = require('cheerio');
const urlencode = require("urlencode");

function inputSearch(value) {
    return new Promise((resolve, reject) => {
        const newValue = urlencode(value)
        const data = request({
            url: 'https://m.shiyua.com/search/?keywords=' + newValue,
            method: 'GET',
            headers: {'Content-Type': 'text/json'}
        }, (error, response, body) => {
            const $ = cheerio.load(body);
            const homePageArr = [];
            // $('.UpdateList').each((index, element) => {
            //     console.log(index);
            // })
            $('.UpdateList').children('.itemBox').each((index, element) => {
                let obj = {};
                obj.imgUrl = $(element).children('.itemImg').children().children().attr('src');
                obj.cartoonName = $(element).children('.itemTxt').children().html();
                obj.cartoonUrl = $(element).children('.itemTxt').children().attr('href');
                obj.cartoonNewName =  $(element).children('.coll').html();
                obj.cartoonNewUrl = $(element).children('.coll').attr('href');
                homePageArr.push(obj);
                console.log(obj);
            }) 
            if (error) {
                reject(error)
            } else {
                resolve(homePageArr)
            }
        })
    })
}

module.exports = inputSearch;