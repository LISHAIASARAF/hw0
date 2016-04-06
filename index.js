'use strict'; //JS engine use strict parsing

var EventEmitter = require('events');
var eventsConfig = require('./config');
var hotel = require('./hotel');
var http = require ('http'),
    express = require('express');

var hotel1 = new hotel('Agamim','spa');

var response = [];

hotel1.on(eventsConfig.PRINT,function(){
    console.log('the name is: ' +`${this.name }`);
    console.log('the type is: ' +`${this.type }`);
    console.log('likes :' +`${this.likes }`);
    console.log('stars :' +`${this.stars }`);
    console.log('the reviews :' +`${this.reviews }`);

    response.push("likes:"+this.likes);
    response.push("stars:"+this.stars);
    response.push("reviews:"+this.reviews);
});


hotel1.starsf(4);//4
hotel1.starsf(2);//3
hotel1.starsf(3);//2
hotel1.likesPlus();
hotel1.likesPlus();
hotel1.likesPlus();
hotel1.reviewsPlus('one');
hotel1.reviewsPlus('two');
hotel1.reviewsMinus();





var app = express();

app.get('/', function(req,res){
    res.send(response);
    res.end();
});
http.createServer(app).listen(8080);