import { getCardCheck } from '../../lib/utils';

test('return true', () => {
    const result = getCardCheck('2200770212727079');
    expect(result).toBe(true);
});

test('return false', () => {
    const result = getCardCheck('2200770212727078');
    expect(result).toBe(false);
});
