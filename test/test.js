test("timeElapsed should be Zero before we start the Timer", function() {
  equal(zero(), 0, 'Message: timer is zero at start' );
});

test('timer should count from 0 to 1', function() {
  equal(counter(), 1, 'Incremented zero by one');
});

test('timer should count from 0 to 2', function() {
  equal(increment(), 2, 'Incremented zero by two');
});
