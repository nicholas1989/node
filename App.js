/*const http = require('http');*/
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');



const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

/*const server = http.createServer(app);*/

app.listen(3000);
