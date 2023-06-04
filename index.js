// global scope variables and methods
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = 3000;

//join path variables
const staticFilePath = path.join(__dirname, 'public');
const partialsPath = path.join(__dirname, 'templates/partials')
const templatePath = path.join(__dirname, 'templates/views')
console.log(templatePath, partialsPath)
// setting view engine
app.set('view engine', 'hbs');
app.set('views', templatePath) //serving html files (hbs)
hbs.registerPartials(partialsPath) //serving partials
app.use(express.static(staticFilePath)); // serving static files

// routings
app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/course-devoops', (req, res)=>{
    res.render('devoops')
})

app.get('/course-rhcse', (req, res)=>{
    res.render('rhcse')
})

app.get('/course-rha', (req, res)=>{
    res.render('rha')
})

app.get('/course-mern', (req, res)=>{
    res.render('full_stack_web')
})

app.get('/course-aws', (req, res)=>{
    res.render('aws')
})

app.get('/course-salesforce', (req, res)=>{
    res.render('salesforce')
})

app.get('/gallery', (req, res)=>{
    res.render('gallery')
})

app.get('/response_200', (req, res)=>{
    res.render('thanks')
})

// server 
app.listen(port, ()=>{
    console.log("Listening On Port " + port)
})