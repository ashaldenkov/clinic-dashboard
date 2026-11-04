import { describe, expect, it } from 'vitest';

import { formatDateOfBirth } from './date';

describe('formatDateOfBirth', () => {
  it('runs in a timezone west of UTC, where naive date parsing goes wrong', () => {
    // Under UTC the cases below would pass even with `new Date(value)`.
    expect(new Date('1992-02-29').getDate()).toBe(28);
  });

  it.each([
    ['08/23/1996', 'August 23, 1996'],
    ['1979-11-02', 'November 2, 1979'],
    ['1992-02-29', 'February 29, 1992'],
  ])('formats %s as %s', (input, expected) => {
    expect(formatDateOfBirth(input)).toBe(expected);
  });

  it('returns values in an unknown format unchanged', () => {
    expect(formatDateOfBirth('23.08.1996')).toBe('23.08.1996');
  });
});
