const express = require('express')

const app = express()
const port = 3000

var birds = require('./birds')

app.use('/birds', birds)


app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})


console.log(__dirname)

app.use('/cssFiles', express.static(__dirname + '/assets'))

app.get('/', (req,res) => res.send('Hello World!'))

app.get('/profile/:id', (req,res) =>
{
    res.send('Profile id is : ' + req.params.id)
})

app.get('/about', (req,res) =>
{
    res.send('about')
})

app.get('/Random.txt', (req,res) =>
{
    res.send('neha')
})

app.get('/example/b', (req,res,next) =>
{
    console.log('neha')
    next()
}, (req,res) =>
{
    res.send('HELLO NEHA!!!!!!')
})

app.post('/profile/:id', (req,res) =>
{
    res.send('Profile id is : ' + req.params.id)
})


app.route('/book').get(function (req, res)
{
    res.send('Get a random book')
}).post(function (req, res)
{
    res.send('Add a book')
}).put(function (req, res)
{
    res.send('Update the book')
})


app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}!`)
})