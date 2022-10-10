import liveFunc from '../live';

test.each([
  [
    { name: 'мечник', health: 10 }, 'critical',
  ],
  [
    { name: 'охотник', health: 40 }, 'wounded',
  ],
  [
    { name: 'маг', health: 90 }, 'healthy',
  ],
])('Тест здоровья', (fn, expected) => {
  expect(liveFunc(fn)).toBe(expected);
});
