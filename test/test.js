test('Calling `timePassed` on a new `Stopwatch` should return `0`.', function( assert ) {
  var watch = new Stopwatch();
  var expectedTime = 0;
  var actualTime = watch.test1();

  assert.equal(actualTime, expectedTime);
});

test('Calling `timePassed` after the timer has been running for 2000ms should return `2000`.', function( assert ) {
  var done = assert.async();
  var expectedTime = 2000;

  var watch = new Stopwatch();
  watch.start();

  setTimeout(function() {

    watch.stop();
    var actualTime = Math.round(watch.test2()/100)*100;
    console.log(actualTime, watch.test2());
    assert.equal(actualTime, expectedTime);
    done();

  }, expectedTime);
});
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
