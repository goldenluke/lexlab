import fs from 'node:fs';
import path from 'node:path';
import { stripHtml } from 'string-strip-html';
import { marked } from 'marked';

export async function GET() {
    // CORREÇÃO: Apontando para o novo diretório correto
    const lawsDir = path.resolve('./src/projetos-leis');

    if (!fs.existsSync(lawsDir)) {
        return new Response(JSON.stringify([]), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const folders = fs.readdirSync(lawsDir).filter(f =>
    fs.lstatSync(path.join(lawsDir, f)).isDirectory()
    );

    const searchIndex = [];

    folders.forEach(folder => {
        const projectPath = path.join(lawsDir, folder);
        const configPath = path.join(projectPath, 'config.json');

        if (fs.existsSync(configPath)) {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

            // Vasculha as subpastas de conteúdo para indexar o texto
            ['docs', 'artigos'].forEach(sub => {
                const subPath = path.join(projectPath, sub);
                if (fs.existsSync(subPath)) {
                    fs.readdirSync(subPath).forEach(file => {
                        if (file.endsWith('.md')) {
                            const rawContent = fs.readFileSync(path.join(subPath, file), 'utf-8');
                            const htmlContent = marked.parse(rawContent);
                            // Remove tags HTML para deixar apenas o texto puro na busca
                            const cleanText = stripHtml(htmlContent).result;

                            searchIndex.push({
                                id: `${folder}-${file}`,
                                projetoId: folder,
                                tituloProjeto: config.titulo,
                                secao: file.replace(/^\d+-/, '').replace('.md', '').toUpperCase(),
                                             conteudo: cleanText,
                                             url: `/projeto/${folder}`
                            });
                        }
                    });
                }
            });
        }
    });

    return new Response(JSON.stringify(searchIndex), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
