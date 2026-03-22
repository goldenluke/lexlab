import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const LEIS_DIR = path.join(ROOT_DIR, 'src', 'leis', 'src', 'projetos-leis');

// Configurações do Linter
const MIN_EXPOSICAO_WORDS = 100; // Mínimo de palavras na justificativa
const REQUIRED_FIELDS = ['id', 'titulo', 'autor', 'status', 'esfera', 'localizacao'];
const REQUIRED_LOC_FIELDS = ['pais', 'estado', 'municipio'];

let hasError = false;

console.log(`\n⚖️  Linter Legislativo LexLab: Iniciando auditoria técnica...\n`);

if (!fs.existsSync(LEIS_DIR)) {
    console.error("❌ Erro Crítico: Diretório de leis não encontrado.");
    process.exit(1);
}

const projects = fs.readdirSync(LEIS_DIR).filter(f => fs.lstatSync(path.join(LEIS_DIR, f)).isDirectory());

projects.forEach(folder => {
    const pPath = path.join(LEIS_DIR, folder);
    const configPath = path.join(pPath, 'config.json');

    console.log(`📂 Auditando: [${folder}]`);

    // 1. Validação do config.json
    if (!fs.existsSync(configPath)) {
        console.error(`   ❌ Falha: config.json ausente.`);
        hasError = true;
        return;
    }

    try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

        // Verifica campos base
        REQUIRED_FIELDS.forEach(f => {
            if (!config[f]) {
                console.error(`   ❌ Falha: Campo '${f}' é obrigatório.`);
                hasError = true;
            }
        });

        // Verifica campos de localização
        if (config.localizacao) {
            REQUIRED_LOC_FIELDS.forEach(lf => {
                if (!config.localizacao[lf]) {
                    console.error(`   ❌ Falha: Campo 'localizacao.${lf}' é obrigatório.`);
                    hasError = true;
                }
            });
        }
    } catch (e) {
        console.error(`   ❌ Falha: JSON inválido.`);
        hasError = true;
    }

    // 2. Validação da Exposição de Motivos (Docs)
    const docsPath = path.join(pPath, 'docs');
    if (fs.existsSync(docsPath)) {
        const docs = fs.readdirSync(docsPath).filter(f => f.endsWith('.md'));
        let totalWords = 0;
        docs.forEach(d => {
            const content = fs.readFileSync(path.join(docsPath, d), 'utf-8');
            totalWords += content.split(/\s+/).length;
        });

        if (totalWords < MIN_EXPOSICAO_WORDS) {
            console.error(`   ⚠️  Aviso: Justificativa técnica muito curta (${totalWords} palavras). Mínimo sugerido: ${MIN_EXPOSICAO_WORDS}.`);
        }
    }

    // 3. Validação da Estrutura Normativa (Artigos)
    const artsPath = path.join(pPath, 'artigos');
    if (fs.existsSync(artsPath)) {
        const arts = fs.readdirSync(artsPath).filter(f => f.endsWith('.md'));
        arts.forEach(artFile => {
            const content = fs.readFileSync(path.join(artsPath, artFile), 'utf-8');
            const hasArtHeader = content.match(/(Art\.|Artigo)\s+\d+/i);
            if (!hasArtHeader) {
                console.error(`   ❌ Falha em ${artFile}: O texto deve conter a marcação 'Art. X' ou 'Artigo X'.`);
                hasError = true;
            }
        });
    }
});

console.log("\n--------------------------------------------------");
if (hasError) {
    console.log("❌ O Linter encontrou erros técnicos graves. Corrija-os antes do commit.");
    process.exit(1);
} else {
    console.log("✅ Auditoria concluída! O projeto segue os padrões da LexLab.");
    process.exit(0);
}
