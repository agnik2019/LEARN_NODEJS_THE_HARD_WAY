const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname,'../public'))

const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=> {
    res.render('index',{
        title:'Weather app',
        name:'Agnik Saha'
    })
})

app.get('/about', (req,res)=> {
    res.render('about',{
        title:'About me',
        name:'Agnik'
    })
})

app.get('/help',(req,res)=> {
    res.render('help',{
        helpText:'This is helpful text.',
        title:'Help',
        name:'Agnik Saha'
    })
})

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an adress'
        })
    }
    geocode(req.query.address, (error,{latitude, longitude,location}= {}) => {
        if(error){
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error});
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })  
    })
});

app.get('/products', (req,res) => {
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products:[]
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Agnik',
        errorMessage:'Help article not found'
    });
})

app.get('*',(req,res) => {
    res.render('404',{
        title:'404',
        name:'Agnik',
        errorMessage:'Page not found'
    })
});



app.listen(3000, ()=> {
    console.log("listening to the port 3000");
});