'use strict';
//global variables
var stores = [pike, seatac, sCenter, capHill, alki];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minCust, maxCust, avgSale) {
  this.name = name; // dynamic name property
  this.minCust = minCust; // dynamic minCust property
  this.maxCust = maxCust; // dynamic maxCust property
  this.avgSale = avgSale; // dynamic avgSale property
}
// function that constructs tablerow to display store hours
function buildHeader(){
  // referencing thead element using it's ID and assigning it as the variable of header
  var header = document.getElementById('hours-header');
  console.log('header', header);
  // Created a table-row element and assigned it as the value of hoursRow variable
  var hoursRow = document.createElement('tr');
  console.log('hoursRow', hoursRow);
  // append hoursRow to header as a child element
  header.appendChild(hoursRow);
// Use a for loop to itirate through the hours array in order to create and append td elements to hoursRow showing business hours
  for(var i = 0; i < hours.length; i++) {
    // create td element for each index of hours array in order to append them to table row
    var hourCell = document.createElement('td');
    console.log('hourCell', hourCell);
    //sets specific index of hours as innerHTML of the previously created hourCell
    hourCell.innerHTML = hours[i];
    //append hourCell to hoursRow as child element
    hoursRow.appendChild(hourCell);
  }

}

buildHeader();

// renderHeader();
function renderTable(){
  var table = document.getElementById('shell');
  console.log('table', table);
  var data = [];

  for (var i = 0; i < stores.length; i++) {
    data.push(
      '<td>' + stores[i] + '</td>'
      // '<td>' + stores[i].minCust + '</td>' +
      // '<td>' + stores[i].maxCust + '</td>' +
      // '<td>' + stores[i].avgSale + '</td>'
    );

  }
}
renderTable();

// function that generates random number of cookies sold per hour.
function randomNumGen(minCust, maxCust, avgSale) {
  var people = Math.floor(Math.random() * (maxCust - minCust)) + minCust;
  return people * avgSale;
}

// function listStore(store) {
//   var list = document.createElement('ul'); // two arrays to create strings to be inputed into html
//   var listArr = [];
//   var cookieArr = []; // stores number of cookies sold per hour so it can be totaled
//   // displays business hours alongside cookies sold each hour
//   var hoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// }
// listStore();
//
// for (var i = 0; i < 15; i++) {
//   var thisHr = Math.floor(randomNumGen(store.minCust, store.maxCust, store.avgSale)); // a for loop that uses randomNumGen function to get number of cookies for each hour, then pushes each number into listArr and cookieArr
//   console.log ('Cookies: ', thisHr);
//   listArr.push ('<li>' + timeArr[i] + thisHr + '</li>');
//   cookieArr.push(thisHr);
// }

var pike = new Store('1st and Pike', 23, 3, 6.3);
var seatac = new Store('Seatac Airport', 3, 24, 1.2);
var sCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
