'use_strict';

var express = require('express');
var app = express();
var preload = require("openui5-preload");
 


app.use('/resources', express.static('node_modules/openui5.runtime.downloader/lib/resources'));
app.use('/', express.static('src/webapp'));
app.get('/weather', function (req, res) {
   console.log('weather');
   var Client = require('node-rest-client').Client;

// configure proxy 
var options_proxy = {
    proxy: {
        host: "bvvproxy.brno.bvv.cz",
        port: 8080
    }
};   
   var client = new Client(options_proxy);    
   // registering remote methods
   client.registerMethod("jsonMethod", "http://api.openweathermap.org/data/2.5/group?units=metric&id=3078610,3067696,3063858,3061370&APPID=bdcb52e30e3b1bb936a06d7c19f0cdab", "GET");
    
   var req2 = client.methods.jsonMethod(function (data, response) {
       // parsed response body as js object
       console.log(response.statusCode);
       // raw response
       if (response.statusCode === 200)
            res.send(JSON.stringify(data));
       res.end();
   });
// handling specific req2 errors 
   req2.on('error', function (err) {
       console.log('something went wrong on req2!!', err.request.options);
       res.end();
   });
});


preload({
  resources: ['src'],
  dest: 'src',
  compress: true,
  verbose: true,
  components: {'**': {}}
});


app.listen(3000, function () {
    console.log('OpenUI5 on NodeJS example app is listening on port 3000!');
});