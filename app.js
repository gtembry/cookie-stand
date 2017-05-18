'use strict'

function Store(name, minCust, maxCust, avgSale) {
  this.name = name; // dynamic name property
  this.minCust = minCust; // dynamic minCust property
  this.maxCust = maxCust; // dynamic maxCust property
  this.avgSale = avgSale; // dynamic avgSale property
}

var pike = new Store('1st and Pike', 23, 3, 6.3);
var seatac = new Store('Seatac Airport', 3, 24, 1.2);
var sCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var stores = [pike, seatac, sCenter, capHill, alki];

var table = document.getElementbyId('shell');
var data = [];

for (var i = 0; i < stores.length; i++) {
  data.push(
    '<td>' + stores[i].name + '</td>' +
    '<td>' + stores[i].minCust + '</td>' +
    '<td>' + stores[i].maxCust + '</td>' +
    '<td>' + stores[i].avgSale + '</td>'
  );
}



// function that generates random number of cookies sold per hour.
function randomNumGen(minCust, maxCust, avgSale) {
  var people = Math.floor(Math.random() * (maxCust - minCust)) + minCust;
  return people * avgSale;
}

function listStore(store) {
  var list = document.createElement('ul'); // two arrays to create strings to be inputed into html
  var listArr = [];
  var cookieArr = []; // stores number of cookies sold per hour so it can be totaled
  // displays business hours alongside cookies sold each hour
  var hoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}

for (var i = 0; i < 15; i++) {
  var thisHr = Math.floor(randomNumGen(store.minCust, store.maxCust, store.avgSale)); // a for loop that uses randomNumGen function to get number of cookies for each hour, then pushes each number into listArr and cookieArr
  console.log ('Cookies: ', thisHr);
  listArr.push ('<li>' + timeArr[i] + thisHr + '</li>');
  cookieArr.push(thisHr);
}







//
//   for (var i=0; i < 15; i++) {
//     var numCookies = CookiesSoldHr(store.minCust, store.maxCust, store.avgSale);
//   }
// }
