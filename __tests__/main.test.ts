import { hello } from '../src/main';


describe('hello', () => {
  it('returns a custom greeting', () => {
    expect(hello('World')).toBe('Hello, World!');
  });
});
