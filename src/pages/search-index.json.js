import fs from 'node:fs';
import path from 'node:path';
import { stripHtml } from 'string-strip-html';
import { marked } from 'marked';

export async function GET() {
    // CAMINHO EXATO:
    const lawsDir = path.resolve('./src/leis/src/projetos-leis');

    if (!fs.existsSync(lawsDir)) return new Response(JSON.stringify([]));

    const folders = fs.readdirSync(lawsDir).filter(f => fs.lstatSync(path.join(lawsDir, f)).isDirectory());
    const searchIndex = [];

    folders.forEach(folder => {
        const projectPath = path.join(lawsDir, folder);
        const config = JSON.parse(fs.readFileSync(path.join(projectPath, 'config.json'), 'utf-8'));

        ['docs', 'artigos'].forEach(sub => {
            const subPath = path.join(projectPath, sub);
            if (fs.existsSync(subPath)) {
                fs.readdirSync(subPath).forEach(file => {
                    if (file.endsWith('.md')) {
                        const rawContent = fs.readFileSync(path.join(subPath, file), 'utf-8');
                        const cleanText = stripHtml(marked.parse(rawContent)).result;
                        searchIndex.push({
                            tituloProjeto: config.titulo,
                            conteudo: cleanText,
                            url: `/projeto/${folder}`
                        });
                    }
                });
            }
        });
    });

    return new Response(JSON.stringify(searchIndex));
}
