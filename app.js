const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const homePageRouter = require('./routers/homePage')
const pageDetailsRouter = require('./routers/pageDetails')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {

})
app.use('/home', homePageRouter);
app.use('/details', pageDetailsRouter)
app.listen(8080, () => {
    console.log('listen to 8080');
})