'use strict';


var shophours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm','8pm']

var ulSeattle = document.getElementById('Seattle')

var shopSeattle ={
    minCustomersPerhour: 23,
    maxCustomersPerhour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour:[],
    cookiesEachHour: [],
		totalCookiesPerDay: 0,

		generateCustomersEachHour: function() {
			for( var i = 0; i < shophours.length; i++) {
			var customers = randomNumber(this.minCustomersPerhour, this.maxCustomersPerhour);
		
			this.cookiesEachHour.push(randomNumber);
			}
			}
		

		generateCookiesEachHour: function(){
			this.generateCustomersEachHour();
			for( var i = 0; i < hours.length; i++) {
			var cookiesForOneHour = Math.ceil(this.customersEachHour * this.averageCookiesPerCustomer)
			this.cookiesEachHour.push(cookiesForOneHour);
			this.totalCookiesPerDay += cookiesForOneHour;
		}
		},
}
render: function() {
	for( var i = 0; i < hours.length; i++){
		var liEL = document.createElement('li');
		liEL.textContent = `${hours[i]} Cookies:${this.cookiesEachHour[i]}`;
		ulSeattle.appendChild(liEL);
}
var liELTotal = document.createElement('li');
liELTotal.textContent = `Daily totals: ${liELTotal}`;
ulshopSeattle.appendChild(liELTotal);
};
shopSeattle.generateCustomersEachHour();
shopSeattle.generateCookiesEachHour();
shopSeattle.render();

function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
  }