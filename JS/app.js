'use strict';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var shophours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm','8pm'];

var shops = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']


// function shopsinCities = document.getElementById('Seattle','Tokyo','Dubai', 'Paris', 'Lima');

function salesPerCity(location, minCustomersPerhour, maxCustomersPerhour,averageCookiesPerCustomer){
  this.location = location;
  this.minCustomersPerhour = minCustomersPerhour;
  this.maxCustomersPerhour = maxCustomersPerhour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.salesPerCity = [];
  salesPerCity.call.push(this);
}


// var shopSeattle ={
//   minCustomersPerhour: 23,
//   maxCustomersPerhour: 65,
//   averageCookiesPerCustomer: 6.3,
//   customersEachHour:[],
//   cookiesEachHour: [],
//   totalCookiesPerDay: 0,

var Seattle = new SalesPerLocation('Seattle', 23, 65, 6.3);

var Tokyo = new SalesPerLocation('Tokyo', 3, 24, 1.2);

var Dubai = new SalesPerLocation('Dubai', 11, 38, 3.7);

var Paris = new SalesPerLocation('Paris', 20, 38, 2.3);

var Lima = new SalesPerLocation('Lima', 2, 16, 4.6);

  generateCustomersEachHour: function() {
    for( var i = 0; i < shophours.length; i++) {
      var customers = randomNumber(this.minCustomersPerhour, this.maxCustomersPerhour);

      this.customersEachHour.push(customers);
    }
  },


 salesPerCity.prototype.generateCookiesEachHour: function() {
    this.generateCustomersEachHour();
    for( var i = 0; i < shophours.length; i++) {
      var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(cookiesForOneHour);
      console.log(cookiesForOneHour);
      this.totalCookiesPerDay += cookiesForOneHour;
    }
  },
  render: function() {
    for( var i = 0; i < shophours.length; i++){
      var ThEL = document.createElement('Th');
      ThEL.textContent = `${shophours[i]} Cookies:${this.cookiesEachHour[i]}`;
      shopsinCities.appendChild(ThEL);
    }
  }
};

// shopSeattle.generateCustomersEachHour();
// shopSeattle.generateCookiesEachHour();
// shopSeattle.render();


var TrELTotal = document.createElement('tr');
TrELTotal.textContent = `Daily totals: ${shopsinCities.totalCookiesPerDay}`;
shopsinCities.appendChild(TrELTotal);


this.renderShopRow();