const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const session = require('express-session');

//serving static files
app.use(express.static('public'))


require('./models/wish')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000000
    }
}));

// import routes
require('./routes')(app);

// in case of production
app.use(express.static('client/build'))
const path = require('path');
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})  

app.listen(port,()=>{
    console.log("server is running on port" + port)
})

