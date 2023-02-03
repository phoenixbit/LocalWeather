const express =  require('express')
const app = express()
app.use(express.static("public"));

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('index') // renders the index.ejs file
})

app.listen(4000) // listening on port 4000