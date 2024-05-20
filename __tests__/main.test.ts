import { hello } from '../src/main';


describe('Hello, World', () => {
  it('should return "Hello, World!"', () => {
    expect(hello('World')).toBe('Hello, World!');
  });
});
