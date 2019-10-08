'use strict';



var  = document.createElement

var shop shophours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm','8pm']

var ulSeattle = document.getElementById('Seattle')

var shopSeattle ={
    minCustomersPerhour: 23,
    maxCustomersPerhour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour:[],
    cookiesEachHour: [],
    totalCookiesPerDay: 0
}

function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
  }