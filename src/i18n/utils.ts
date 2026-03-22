// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

/**
 * Captura o idioma atual a partir dos parâmetros de busca da URL (?lang=en).
 */
export function getLangFromUrl(url: URL) {
    const params = new URLSearchParams(url.search);
    const lang = params.get('lang');

    // Verifica se o idioma existe no dicionário, senão retorna o padrão
    if (lang && lang in ui) {
        return lang as keyof typeof ui;
    }

    return defaultLang;
}

/**
 * Hook de tradução simplificado para evitar erros de compilação.
 */
export function useTranslations(lang: keyof typeof ui) {
    return function t(key: string) {
        // Tenta buscar no idioma selecionado, faz fallback para o padrão (pt),
        // e se não existir em nenhum, retorna a própria chave.
        // @ts-ignore
        return ui[lang][key] || ui[defaultLang][key] || key;
    }
}

/**
 * Utilitário para manter o idioma nos links internos.
 */
export function withLang(path: string, lang: string) {
    const connector = path.includes('?') ? '&' : '?';
    return `${path}${connector}lang=${lang}`;
}
