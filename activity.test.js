const { capitalize } = require('./activity');

test('capitalizes first character of given string', () => {
    expect(capitalize('cat')).toBe('Cat');
    expect(capitalize('cAT')).toBe('Cat');
});