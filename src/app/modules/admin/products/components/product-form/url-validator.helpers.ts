export function urlValidatorHelper(path: string): string {
    const prefix = 'https://';
    if (!path) return '';
    return path.startsWith(prefix) ? path : `${prefix}${path}`;
  }
  