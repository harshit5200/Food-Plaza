const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

var dbUrl = config.get('dbURL');

mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Database Connected!"))
.catch((err) => console.log("Database Connection Error" + err))


//Routes
app.use('/api/user',require('./routes/api/SignUp'));
app.use('/api/auth',require('./routes/api/SignIn'));
app.use('/api/foodmenu',require('./routes/api/FoodMenu'));
app.use('/api/retrievefood',require('./routes/api/RetrieveFood'));
app.use('/api/retrieveuser',require('./routes/api/RetrieveUser'));
app.use('/api/deleteuser',require('./routes/api/DeleteUser'));
app.use('/api/deletefood',require('./routes/api/DeleteFood'));
app.use('/api/filtername',require('./routes/api/FilterName'));
app.use('/api/filterrating',require('./routes/api/FilterRating'));
app.use('/api/filterprice',require('./routes/api/FilterPrice'));
app.use('/api/searchfood',require('./routes/api/SearchFood'));
app.use('/api/confirmorder',require('./routes/api/ConfirmOrder'));
app.use('/api/retrieveorder',require('./routes/api/RetrieveOrder'));
app.use('/api/deleteorder',require('./routes/api/DeleteOrder'));
app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Connected to Server at ' + port + '!')
})
