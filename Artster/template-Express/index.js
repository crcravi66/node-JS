const express = require("express")
const app =express() ;
const path = require('path')
const redditData = require('./data.json')

app.use(express.static('public'))


app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req, res) =>{
    res.render( 'home')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit', { ...data });     
    } else {
        res.render('notfound',{ subreddit })
    }
})  

app.get('/rand',(req, res) =>{
    const num = Math.floor(Math.random() * 10) +1
    res.render('random', {rand : num})
})

app.get("",(req, res) => {
    const cats = ["Kitty", "Blue", "Rocket", "Monty", "strphanie", "Winston"]
    res.render("cats", {cats})
})

app.listen(4000, () =>{
    console.log("listening on port 4000")
})