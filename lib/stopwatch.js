function Stopwatch () {
  var startTime = 0;
  var endTime = 0;

  this.start = function(){
    startTime = Date.now();
  };

  this.stop = function() {
    endTime = Date.now();
  };

  this.getTime = function() {
    return endTime - startTime;
  };

}
// var zero = function() { return 0;};
//
// var counter = function() { return zero()+1;};
//

// var time = function() {
//     second++;
//     console.log(second);
//     if (second % 5 === 0) {
//       minute++;
//       console.log(minute);
//     }
// };
//
//
// setInterval(time, 1000);
