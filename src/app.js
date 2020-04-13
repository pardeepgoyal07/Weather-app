const hbs = require('hbs')
const path = require('path')
const express = require('express')
const app = express()
const a = path.join(__dirname,'../public')
const b = path.join(__dirname,'../templates/views')
const c = path.join(__dirname,'../templates/partials')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
app.set('view engine','hbs')
app.set('views',b)
hbs.registerPartials(c)
app.use(express.static(a))
app.get('',(req,res)=>
{
    res.render('index',{
        title: 'Weather app',
        name: 'Pardeep Goyal'
    })
})
app.get('/help',(req,res)=>
{
    res.render('help',{
        title: 'Help page',
        name: 'Pardeep Goyal'
    })
})
app.get('/About',(req,res)=>
{
    res.render('about',{
        title: 'About Page',
        name: 'Pardeep Goyal'
    })
})
app.get('/weather',(req,res)=>
{
    if(!req.query.location)
    {
        return res.send({
            error: 'Please enter a location for search'
        })
    }
    console.log(req.query.location)
    geocode(req.query.location,(error,{latitude,longitude,location}={})=>{
        if(error)
        {
            return console.log(error)
        }
    forecast(latitude,longitude,(error,forecastdata)=>
    {
        if(error)
        {
            return console.log(error)
        }
        res.send({
            location: location,
            forecast: forecastdata,
            address: req.query.location
        })
    })
})}
    )
app.get('/help/*',(req,res)=>
{
    res.render('help1',{
        name: 'Pardeep Goyal'
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        name: 'Pardeep Goyal'
    })
})
app.listen(3000,()=>
{
    console.log('Server is up and running')
})