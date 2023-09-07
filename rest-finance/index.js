const express = require('express') // for library
const app = express()
const request = require('request') // for fetche
const fs = require ('fs')
const { PORT } = require('./config.js')
const { API_KEY } = require('./config.js')

app.get('/ticker=:id', function(req, res){
    //res.end(req.params.id)
    var ticker = req.params.id
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ticker+'&interval=5min&apikey='+API_KEY;

//API dans le documentation
request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      var newData = JSON.stringify(data)
      fs.writeFile(__dirname + '/'+ ticker +'.json', newData, err)
      if (err) throw err;
    
      console.log(data);
    }
   // res.send('success')
})

})

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})