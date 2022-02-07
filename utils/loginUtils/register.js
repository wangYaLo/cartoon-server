const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

function resgister(data) {
    return new Promise((resovle, reject) => {
        MongoClient.connect(url, (err, client) => {
            if (err) {
                reject('数据查询错误');
            } else {
                const db = client.db('admin')
                db.collection('user').find({ username: data.username }).toArray(function (err, results) {
                    if (results.length === 0) {
                        db.collection('user').insertOne(data, function (error) {
                            if (error) {
                                reject({
                                    code: 500,
                                    msg: '用户添加失败'
                                })
                                client.close()
                            } else {
                                resovle({
                                    code: 200,
                                    msg: '用户添加成功'
                                })
                            }
                        })
                    } else {
                        reject({
                            code: 500,
                            msg: '用户存在'
                        });
                        client.close();
                    }
                })
            }
        })
    }) 
};

module.exports = resgister;