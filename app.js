'use strict';

var pike = {
  name: '1st and Pike',
  minCust:23,
  maxCust:3,
  avgSale:6.3
};

var seatac = {
  name: 'Seatac Airport',
  minCust:3,
  maxCust:24,
  avgSale:1.2
};
var center = {
  name: 'Seattle Center',
  minCust:11,
  maxCust:38,
  avgSale:3.7
};
var capHill = {
  name: 'Capitol Hill',
  minCust:2,
  maxCust:38,
  avgSale:2.3
};
var alki = {
  name: 'Alki',
  minCust:0,
  maxCust:16,
  avgSale:4.6,
  randomNumGen: function (minCust, maxCust)
  {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
alki.randomNumGen() * alki.avgSale;
  //   var getCookies = function() {
  //
  // }

// Declare function that gives a random number between min and max customers. Multiply RandomCustNum and average cookies per sale.


// function storeSales(store) {
//   var list = document.createElement('ul');
//   var listArr = [];
//   var timeArr = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
//
//   for (var i=0; i < 15; i++) {
//     var numCookies = CookiesSoldHr(store.minCust, store.maxCust, store.avgSale);
//   }
// }
