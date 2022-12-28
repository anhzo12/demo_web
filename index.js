const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + 'views/partials'
}));

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/createTables', (req,res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('table created');
    });
})

app.get('/', (req, res)=>{
    res.render('index')
});

app.get('/booking', (req, res)=>{
    res.render('booking')
});

app.get('/promotion', (req, res)=>{
    res.render('promotion');
    // console.log('lmao');
});

app.get('/about_us', (req, res)=>{
    res.render('about_us')
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('server id listening on port '+ app.get('port'));
})



