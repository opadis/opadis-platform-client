import { clsx } from 'clsx';

// This is a simple wrapper around clsx to make it easier to use in the project.
export const cn = (...classes: unknown[]) => clsx(classes);