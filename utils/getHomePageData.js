const request = require('request');
const cheerio = require('cheerio');

function htmlDownLoad(func) {
    return new Promise((resolve, reject) => {
        const data = request({
            url: 'https://m.shiyua.com',
            method: 'GET',
            headers: {'Content-Type': 'text/json'}
        }, (error, response, body) => {
            const $ = cheerio.load(body);
            const homePageArr = [];
            $('.imgBox').each((oneIndex, oneElement) => {
                let obj = {};
                obj.name = $(oneElement).children('.Sub_H2').children('.Title').html();
                obj.data = []
                $(oneElement).children('.col_3_1').children('.list-comic').each((liIndex, liElement) => {
                    let newobj = {};
                    newobj.url = $(liElement).children('.ImgA').attr('href');
                    newobj.imgurl =  $(liElement).children('.ImgA').children().attr('src');
                    newobj.name = $(liElement).children('.txtA').html();
                    obj.data.push(newobj)
                })
                homePageArr.push(obj)
            });
            if (error) {
                reject(error)
            } else {
                resolve(homePageArr)
            }
        })
    })
}

module.exports = htmlDownLoad