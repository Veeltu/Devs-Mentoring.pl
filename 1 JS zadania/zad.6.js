// Zad. 6
// Zdefiniuj zmienną URL składają się z trzech składowych: 
// service_name = “https://www.facebook.com/”
// subsite = “login/”
// parameter = “?user=devs-mentoring”

// Zmienna ta ma powstać jako wynik połączenia takich trzech zmiennych. Użyj, tzw. Backticks.

var service_name = 'www.facebook.com/';
var subsite = 'login/';
var parameter = 'user=devs-mentoring';
 
var URL = `(${service_name + subsite + parameter})`;
