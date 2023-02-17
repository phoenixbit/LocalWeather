const express =  require('express')
const app = express()
const https = require('https');
app.use(express.static("public")); 

app.set("view engine", "ejs") //using ejs for the web app

app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=4df1bce68ef8ae00b6c3c865096d3824&units=metric'
    https.get(url, (response) => { //getting the url of the weather api and storing the response in response
        //console.log(response)
        response.on('data', (data) => { 
            const weatherData = JSON.parse(data);
            const CurrentTemp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            res.render('index', { CurrentTemp, description }); // renders the index.ejs file while sending the CurrentTemp and description values over.
        })
    })
    
})

app.listen(4005, () => console.log("Server started on port 4005")) // listening on port 4000 


