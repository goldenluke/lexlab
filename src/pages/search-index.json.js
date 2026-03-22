import fs from 'node:fs';
import path from 'node:path';
import { stripHtml } from 'string-strip-html';
import { marked } from 'marked';

export async function GET() {
    // Caminho para o diretório onde as leis estão armazenadas
    const lawsDir = path.resolve('./src/leis/src/projetos-leis');

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
            try {
                const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

                // Mapeia as subpastas de conteúdo para indexação
                ['docs', 'artigos'].forEach(sub => {
                    const subPath = path.join(projectPath, sub);

                    if (fs.existsSync(subPath)) {
                        fs.readdirSync(subPath).forEach(file => {
                            if (file.endsWith('.md')) {
                                const rawContent = fs.readFileSync(path.join(subPath, file), 'utf-8');

                                // Converte Markdown para HTML e depois remove as tags para indexar texto limpo
                                const htmlContent = marked.parse(rawContent);
                                const cleanText = stripHtml(htmlContent).result;

                                searchIndex.push({
                                    id: config.id,
                                    url: `/projeto/${folder}`,
                                    tituloProjeto: config.titulo,
                                    secao: file.replace('.md', '').toUpperCase(),
                                                 conteudo: cleanText,
                                                 // Novos metadados de localização para busca refinada
                                                 esfera: config.esfera || 'Não informada',
                                                 pais: config.localizacao?.pais || '',
                                                 estado: config.localizacao?.estado || '',
                                                 municipio: config.localizacao?.municipio || '',
                                                 // Campo auxiliar para facilitar a busca por "Estado Cidade"
                                                 localizacaoCompleta: `${config.localizacao?.municipio} ${config.localizacao?.estado} ${config.localizacao?.pais}`
                                });
                            }
                        });
                    }
                });
            } catch (e) {
                console.error(`Erro ao indexar o projeto ${folder}:`, e);
            }
        }
    });

    return new Response(JSON.stringify(searchIndex), {
        headers: {
            'Content-Type': 'application/json',
            // Cache opcional: evita processamento pesado em cada requisição se o site for SSR
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
