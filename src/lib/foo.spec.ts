import { foo } from './foo';

test('foo', () => {
  expect(foo()).toEqual(42);
});
