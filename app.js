const express = require('express')
const path = require('path')

const app = express()
const port = 3000

//template engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: false}))

const foxiesFromDb = [
    {
        "id":1,
        "name":"foxa",
        "image":"https://randomfox.ca//images//19.jpg"
    },
    {
        "id":2,
        "name":"foxi",
        "image":"https://randomfox.ca//images//18.jpg"
    },
    {
        "id":3,
        "name":"foxe",
        "image":"https://randomfox.ca//images//17.jpg"
    },
    {
        "id":4,
        "name":"foxo",
        "image":"https://randomfox.ca//images//16.jpg"
    },
]

app.get('/', (req, res) => {
    res.render('home.ejs',{
    foxies:foxiesFromDb
    })
})
    
app.post('/', (req, res) =>{
    let newFox = {
        name: req.body.name,
        image: req.body.image
    }
    foxiesFromDb.push(newFox)

    res.redirect('/')
})

// app.get('/about', (req, res) => {
//     //res.send('Ini About!')
//     res.render('about.ejs')
// })

// app.get('/echo/:name', (req, res) => {
//     let name = req.params.name
//     res.send(`Halo ${name}!`)
// })

app.get('/*', (req, res) => {
    res.status(404).send('404, Page ini ga ada')
})




app.listen(port, () => {
    console.log('Aplikasi ini runnting di port: ', port)
})
