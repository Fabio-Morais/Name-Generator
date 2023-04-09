import { random, randomArrayPick } from './random';

test('Returning genders', () => {
  const femaleStringToSearch = 'FEMALE';
  const maleStringToSearch = 'MALE';

  expect(randomArrayPick(femaleStringToSearch)[1]).toBe(femaleStringToSearch);
  expect(randomArrayPick(maleStringToSearch)[1]).toBe(maleStringToSearch);
});

test('Random number generator returns a number between the given range', () => {
  const min = 0;
  const max = 7;
  const randomNumber = random(min, max);

  expect(randomNumber).toBeGreaterThanOrEqual(min);
  expect(randomNumber).toBeLessThanOrEqual(max);
});
