const express =  require('express')
const app = express()
const https = require('https');
app.use(express.static("public"));

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=4df1bce68ef8ae00b6c3c865096d3824&units=metric'
    https.get(url, (response) => {
        //console.log(response)
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const CurrentTemp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            //console.log(description);
            //res.send("The temperature currently is : " + CurrentTemp + " degrees celsius")
        })
    })
    res.render('index') // renders the index.ejs file
})

app.listen(4001, () => console.log("Server started on port 4001")) // listening on port 4000 


