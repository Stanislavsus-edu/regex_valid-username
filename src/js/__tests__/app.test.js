import Validator from '../app.js';

test('1', () => {
  expect(Validator.validateUsername('a-44g')).toEqual(true);
});
test('2', () => {
  expect(Validator.validateUsername('1fdif')).toEqual(false);
});
test('3', () => {
  expect(Validator.validateUsername('fdf-54')).toEqual(false);
});
test('4', () => {
  expect(Validator.validateUsername('-fuhf_')).toEqual(false);
});
test('5', () => {
  expect(Validator.validateUsername('jg.ee')).toEqual(false);
});
test('6', () => {
  expect(Validator.validateUsername('jg54535ee')).toEqual(false);
});