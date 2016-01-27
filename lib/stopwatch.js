var zero = function() { return 0;};

var counter = function() { return zero()+1;};
var a = 0;
var increment = function() {
  setInterval(a++, 1000);
}
