
function cartoonDetails(url) {
    return new Promise((resolve, reject) => {
        try {
            let imgUrlArr = []
            for(let i = 0; i < 14; i++) {
                let url1 = url.split('.html')[0].split('/').pop();
                let newurl = 'http://res2.shiyua.com/image/view/' + url1 + '/' + i +'.webp'
                imgUrlArr.push(newurl)
            }
            resolve(imgUrlArr)
        } catch (error) {
            console.log(error);
            reject(error)
        }
        
    })
}

module.exports = cartoonDetails;