export function tField(field: unknown, lang: string = 'pt'): string {
  // null ou undefined
  if (field === null || field === undefined) return '';

  // string direta
  if (typeof field === 'string') return field;

  // objeto multilíngue
  if (typeof field === 'object') {
    const obj = field as Record<string, unknown>;

    const value =
    obj[lang] ??
    obj['pt'] ??
    obj['en'];

    // se já for string → retorna
    if (typeof value === 'string') return value;

    // fallback seguro (evita [object Object])
    try {
      return JSON.stringify(value);
    } catch {
      return '';
    }
  }

  // número, boolean etc
  return String(field);
}
