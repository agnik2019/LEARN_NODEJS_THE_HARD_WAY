const path = require('path');
const express = require('express');
const hbs = require('hbs');


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
    res.send({
        forecast:"It is raining",
        location:'Dhaka'
    })
});

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