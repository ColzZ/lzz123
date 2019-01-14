console.log(222111, (new Date()).getTime() - times);

var div = document.querySelectorAll('div');

var as = (new Date()).getTime();
while((new Date()).getTime() - as < 3000) {}

console.log(222222, div, (new Date()).getTime() - times);