const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homePageRouter = require('./routers/homePage');
const pageDetailsRouter = require('./routers/pageDetails');
const updataPageRouter = require('./routers/updataPage');
const rankPageData = require('./routers/rankPage')
const listPageData = require('./routers/listPage')
const searchPageData = require('./routers/searchPage')
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
app.listen(8080, () => {
    console.log('listen to 8080');
})