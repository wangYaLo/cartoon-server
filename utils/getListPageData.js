const request = require('request');
const cheerio = require('cheerio');
const e = require('express');

function getListPage(url = 'https://m.shiyua.com/list/') {
    return new Promise((resolve, reject) => {
        const data = request({
            url: url,
            method: 'GET',
            headers: {'Content-Type': 'text/json'}
        }, (error, response, body) => {
            const $ = cheerio.load(body);
            const homePageArr = [];
            $('.col_3_1').children().each((index, element) => {
                let obj = {};
                obj.url = $(element).children('.txtA').attr('href');
                obj.name = $(element).children('.txtA').html();
                obj.imgurl = $(element).children('.ImgA').children().attr('src');
                obj.newurl = $(element).children('.info').children().attr('href');
                obj.newname = $(element).children('.info').children().html();
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

module.exports = getListPage;