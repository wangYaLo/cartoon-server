const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homePageRouter = require('./routers/cartoonRouter/homePage');
const pageDetailsRouter = require('./routers/cartoonRouter/pageDetails');
const updataPageRouter = require('./routers/cartoonRouter/updataPage');
const rankPageData = require('./routers/cartoonRouter/rankPage');
const listPageData = require('./routers/cartoonRouter/listPage');
const searchPageData = require('./routers/cartoonRouter/searchPage');
const userRouter = require('./routers/userRouter/index')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {

})
app.use('/home', homePageRouter);
app.use('/updata', updataPageRouter)
app.use('/rank', rankPageData)
app.use('/list', listPageData)
app.use('/search', searchPageData)
app.use('/details', pageDetailsRouter)
app.use('/user', userRouter)
app.listen(8080, () => {
    console.log('listen to 8080');
})