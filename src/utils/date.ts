import { format, isValid, parse } from 'date-fns';

const API_DATE_FORMATS = ['yyyy-MM-dd', 'MM/dd/yyyy'] as const;

// `new Date('1996-08-23')` is UTC midnight, i.e. the previous day west of UTC.
export function parseApiDate(value: string): Date | undefined {
  for (const pattern of API_DATE_FORMATS) {
    const date = parse(value, pattern, new Date());
    if (isValid(date)) return date;
  }
  return undefined;
}

export function formatDateOfBirth(value: string): string {
  const date = parseApiDate(value);
  return date ? format(date, 'MMMM d, y') : value;
}
