const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* app.use('/user/:id', function (req, res, next)
{
    console.log('Request Type:', req.method)
    next()
})

app.get('/user/:id', function (req, res, next)
{
    res.send('USER')
}) */


app.set('view engine', 'pug')

app.get('/templ', (req,res) =>
{
    res.render('templ', { title: 'Hey ', message: 'Hi Neha!!!'})
})

/* app.get('/', (req,res) =>
{
    throw new Error("BROKEN")
}) */

/* app.get("/", function (req, res, next) {

    setTimeout(function () {
      try {
        throw new Error("BROKEN");
      }
      catch (err) {
        next(err);
      }
    }, 100);
  }); */

//app.use()

app.get("/", (err,req,res,next) =>
{
    console.error(err.stack)
    res.status(500).send("Error: Something went terribly wrong.")
    
})

app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}!`)
})