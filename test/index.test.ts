import { greetings } from '../src/index'

test('greetings test', () => {
    expect(greetings('Anna')).toBe("Hello Anna!!");
});