import { greetings, greetings2 } from '../src/index'

test('greetings test', () => {
    expect(greetings('Anna')).toBeDefined();
});

test('greetings2 test', () => {
    expect(greetings2('Anna')).toBeDefined();
});