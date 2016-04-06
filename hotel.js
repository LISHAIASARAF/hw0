'use strict'; //JS engine use strict parsing

var EventEmitter = require('events');
var eventsConfig = require('./config');

module.exports = class Hotel extends EventEmitter {
    constructor(name,type){
        super();
        this.likes = 0;
        this.stars = 0;
        this.reviews = [];
        this.numOfPeople = 0;
        this.name = name;
        this.type = type;
    }
    // hola(data) {
    //     console.log(`${this.hello }: ${data}`);
    //     this.emit(eventsConfing.HELLO, data);
    // }
    starsf(myStar) {
        this.numOfPeople+=1; 
        this.stars = (this.stars + myStar)/this.numOfPeople;
        this.emit(eventsConfig.PRINT);
                
    }
    likesPlus(){
        this.likes+=1;
        this.emit(eventsConfig.PRINT);
        
    }
     likesMinus(){
        if(this.likes>0){
            this.likes-=1;
            this.emit(eventsConfig.PRINT);
        }  
    }
    reviewsPlus(myReview){
        this.reviews.push(myReview);
        this.emit(eventsConfig.PRINT);
        
    }
    reviewsMinus(){
        if(this.reviews.length>0){
            this.reviews.pop();
            this.emit(eventsConfig.PRINT);
        }
    }
}