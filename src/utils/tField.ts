export function tField(field: any, lang: string = 'pt'): string {
  if (field === null || field === undefined) return '';

  if (typeof field === 'object') {
    const value = field[lang] ?? field.pt ?? field.en;

    if (typeof value === 'string') return value;

    return JSON.stringify(value);
  }

  return String(field);
}
