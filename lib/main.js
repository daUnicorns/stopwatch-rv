var watch = new Stopwatch();

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

start.addEventListener('click', function() {
  watch.start();
});

stop.addEventListener('click', function() {
  watch.stop();
});

reset.addEventListener('click', function() {
  watch.reset();
  document.getElementById("clock").innerHTML = "00 : 00 : 000"
});
