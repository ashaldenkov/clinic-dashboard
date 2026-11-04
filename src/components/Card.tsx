import type { ComponentProps } from 'react';

import { cx } from '../utils/cx';

export function Card({ className, ...props }: ComponentProps<'section'>) {
  return <section className={cx('rounded-2xl bg-white', className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 className={cx('text-title', className)} {...props} />;
}
