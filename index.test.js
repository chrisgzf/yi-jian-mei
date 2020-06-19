const yjm = require('./index');

test('returns correct chorus song lyrics', () => {
  expect(yjm()).toBe('雪花飘飘，北风萧萧');
});
