function Stopwatch () {
  var startTime = 0;
  var diff;
  var time;

  function update() {
    startTime += gap();
    var digitalTime = digital(startTime);
    // console.log(digitalTime);
  }

  function gap() {
    var endTime = Date.now();
    var timePassed = endTime - time;
    time = endTime;
    return timePassed;
  }

  this.counting = false;

  this.start = function(){
    if (!this.counting) {
      diff = setInterval(update, 10);
      time = Date.now();
      this.counting = true;
    }
  };

  this.stop = function() {
    if(this.counting) {
      clearInterval(diff);
      diff = null;
      this.counting = false;
    }
  };

  this.reset = function() {
    startTime = 0;
  };

  function digital(milli) {
    var startTime = new Date(milli);
    var minutes = startTime.getMinutes().toString();
    var seconds = startTime.getSeconds().toString();
    var milliseconds = startTime.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds
    }

    document.getElementById("clock").innerHTML = minutes + ' : ' + seconds + ' : ' + milliseconds;
    return minutes + ' : ' + seconds + ' : ' + milliseconds;
  }


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
