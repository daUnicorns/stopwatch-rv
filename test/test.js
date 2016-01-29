test('startTime on the new Stopwatch should return `0`.', function( assert ) {
  var watch = new Stopwatch();
  var expectedTime = 0;
  var actualTime = watch.test1();

  assert.equal(actualTime, expectedTime);
});

test('Timer should start once `watch.start` is called, run for 100ms and then stop when `watch.stop` is called.', function( assert ) {
  var done = assert.async();
  var expectedTime = 100;
  var watch = new Stopwatch();

  watch.start();
  watch.stop();
  setTimeout(function() {
    var actualTime = Math.round(watch.test2()/100)*100;
    assert.equal(actualTime, expectedTime);
    done();

  }, expectedTime);
});

test('Timer should go back to 0 once the reset button has been called', function( assert ) {
  var expected = 0;
  var watch = new Stopwatch();
  assert.equal(watch.test3(), expected);
});

test("If the timer has been stopped it should restart if 'watch.start' is pressed again.", function (assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var expectedTime = 500;
  var watch = new Stopwatch();

  watch.start();
  watch.stop();
  setTimeout(function() {
    var actualTime = Math.round(watch.test2()/100)*100;
    assert.equal(actualTime, expectedTime);
    done1();
  }, expectedTime);
  watch.start();
  watch.stop();
  setTimeout(function() {
    var actualTime = Math.round(watch.test2()/100)*100;
    assert.equal(actualTime, expectedTime);
    done2();
  }, expectedTime);
});

test("If 'watch.start' is called twice it does not affect the speed of the watch", function (assert) {
  var done = assert.async();
  var expectedTime = 200;
  var watch = new Stopwatch();

  watch.start();
  watch.start();

  watch.stop();
  setTimeout(function() {
    var actualTime = Math.round(watch.test2()/100)*100;
    assert.equal(actualTime, expectedTime);
    done();

  }, expectedTime);

});

// test("'watch.start' should restart a timer that has been stopped pervious", function(assert){

//
//   setTimeout(watch.stop(), 50);
//   done1();
//   watch.start();
//   setTimeout(watch.stop(), 50);
//   done2();
// });

// var done = assert.async();
// var expectedTime = 2000;
// var watch = new Stopwatch();
//
// watch.start();
// watch.stop();
// setTimeout(function() {
//   var actualTime = Math.round(watch.test2()/100)*100;
//   assert.equal(actualTime, expectedTime);
//   done();
//
// }, expectedTime);
// });

// test("timeElapsed should be Zero before we start the Timer", function() {
//   equal(zero(), 0, 'Message: timer is zero at start' );
// });
//
// test('timer should count from 0 to 1', function() {
//   equal(counter(), 1, 'Incremented zero by one');
// });
//

// test('minute goes from 0 to 1', function() {
//   equal(time(), 2, 'Incremented minute by one');
// });
//
// test('minute goes from 0 to 1', function(assert) {
//   assert.expect(1);
//   var done = assert.async();
//   time(function() {
//     assert.ok(true, "test made it to one minute");
//     done();
//   }, 200);
// });
