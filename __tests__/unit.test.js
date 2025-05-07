// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone number with too few digits', () => {
    expect(isPhoneNumber('123-45-7890')).toBe(false);
  });

  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email format', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  test('valid email with underscore domain', () => {
    expect(isEmail('user@domain.net')).toBe(true);
  });

  test('invalid email missing "@"', () => {
    expect(isEmail('testexample.com')).toBe(false);
  });

  test('invalid email with long TLD', () => {
    expect(isEmail('user@domain.tech')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });

  test('valid password with underscores', () => {
    expect(isStrongPassword('a_b1')).toBe(true);
  });

  test('invalid password too short', () => {
    expect(isStrongPassword('a1')).toBe(false);
  });

  test('invalid password starts with number', () => {
    expect(isStrongPassword('1abcde')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date format with single digits', () => {
    expect(isDate('1/2/2023')).toBe(true);
  });

  test('valid date format with double digits', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });

  test('invalid date with dashes', () => {
    expect(isDate('12-31-1999')).toBe(false);
  });

  test('invalid date with 3-digit year', () => {
    expect(isDate('12/31/999')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid 3-digit hex', () => {
    expect(isHexColor('#abc')).toBe(true);
  });

  test('valid 6-digit hex without hash', () => {
    expect(isHexColor('a1b2c3')).toBe(true);
  });

  test('invalid hex with non-hex characters', () => {
    expect(isHexColor('#ggg')).toBe(false);
  });

  test('invalid hex with wrong length', () => {
    expect(isHexColor('#abcd')).toBe(false);
  });
});