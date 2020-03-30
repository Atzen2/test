import { greetings } from '../src/index'

test('greetings test', () => {
    expect(greetings('Anna')).toBeDefined();
});