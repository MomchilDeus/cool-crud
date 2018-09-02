const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override')

// Set public as express' static folder
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index')
const edit = require('./routes/edit')

// Apply middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(methodOverride('_method'))

// Routes
app.use('/', index)
app.use('/edit/', edit)

app.listen(1337, () => console.log('server started on port 1337'))