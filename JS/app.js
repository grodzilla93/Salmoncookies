'use strict';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Global Variables
var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm','8pm'];
var allStores = [];
var tableEl = document.getElementById('globalSales');
var trEl = document.createElement('tr');
var thEL = document.createElement('th');
var tdEl = document.createElement('td');

function createHeader(){
  trEl = document.createElement('tr');
  thEL = document.createElement('th');
  thEL.textContent = '';
  trEl.appendChild(thEL);
  for(var i=0; i < shopHours.length; i++){
    thEL = document.createElement('th');
    thEL.textContent = shopHours[i];
    trEl.appendChild(thEL);
  }
  thEL = document.createElement('th');
  thEL.textContent = 'Total';
  trEl.appendChild(thEL);
  tableEl.appendChild(trEl);
}
createHeader();
Store.prototype.createRow = function(){
  trEl = document.createElement('tr');
  thEL = document.createElement('th');
  thEL.textContent = this.location;
  trEl.appendChild(thEL);
  for( var i=0; i < this.cookieSalesEachHour.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent= this.cookieSalesEachHour[i];
    trEl.appendChild(tdEl);
  }
  thEL = document.createElement('th');
  thEL.textContent = this.cookiesTotal;
  trEl.appendChild(thEL);
  tableEl.appendChild(trEl);
}

//Store Constructor
function Store(location, minCustomersPerhour, maxCustomersPerhour,averageCookiesPerCustomer){
  this.location = location;
  this.minCustomersPerhour = minCustomersPerhour;
  this.maxCustomersPerhour = maxCustomersPerhour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;

  this.customersEachHour = [];
  this.cookieSalesEachHour = [];
  this.cookiesTotal = 0;

  this.generateCustomersEachHour();
  this.generateCookieSalesEachHour();
  this.generateCookieSalesTotal();

  allStores.push(this);
  this.createRow();
}
console.log(allStores)

Store.prototype.generateCustomersEachHour = function() {
  for( var i = 0; i < shopHours.length; i++) {
    var customers = randomNumber(this.minCustomersPerhour, this.maxCustomersPerhour);
    this.customersEachHour.push(customers);
  }
};

Store.prototype.generateCookieSalesEachHour = function() {
  for( var i = 0; i < shopHours.length; i++) {
    var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    this.cookieSalesEachHour.push(cookiesForOneHour);
  }
};

Store.prototype.render = function(){
  for( var i = 0; i < shopHours.length; i++){
    ThEL.textContent = `${shopHours[i]} Cookies:${this.cookiesEachHour[i]}`;
    allStores.appendChild(ThEL);
  }
};

Store.prototype.generateCookieSalesTotal = function(){

  var total = 0;

  for( var i = 0; i < this.cookieSalesEachHour.length; i++){
    var testData = this.cookieSalesEachHour[i];

    total = total + testData;
  }

  this.cookiesTotal = total;
};

//Instantiation
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

//Populate Data