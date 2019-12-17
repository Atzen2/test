import { greetings, createPassphrase } from '../src/index'

test('greetings test', () => {
    expect(greetings('Anna')).toBeDefined();
});

test('createPassphrase test', () => {
    expect(createPassphrase()).toBeDefined();
});