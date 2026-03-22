import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Pega o caminho absoluto da raiz do projeto independente de onde o script é chamado
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const LEIS_DIR = path.join(ROOT_DIR, 'src', 'projetos-leis');

const REQUIRED_CONFIG_FIELDS = ['id', 'titulo', 'autor', 'status', 'tags', 'github_repo'];

let hasError = false;

console.log(`🔍 Buscando leis em: ${LEIS_DIR}`);

if (!fs.existsSync(LEIS_DIR)) {
    console.error("❌ Erro: Diretório 'src/projetos-leis' não encontrado.");
    console.error("Verifique se a pasta foi criada e se o nome está correto.");
    process.exit(1);
}

const folders = fs.readdirSync(LEIS_DIR).filter(f =>
fs.lstatSync(path.join(LEIS_DIR, f)).isDirectory()
);

if (folders.length === 0) {
    console.error("❌ Erro: Nenhuma pasta de projeto encontrada dentro de 'src/projetos-leis'.");
    process.exit(1);
}

folders.forEach(folder => {
    const projectPath = path.join(LEIS_DIR, folder);
    const configPath = path.join(projectPath, 'config.json');

    console.log(`\n📂 Verificando projeto: [${folder}]`);

    if (!fs.existsSync(configPath)) {
        console.error(`  ❌ Erro: Arquivo 'config.json' ausente em ${folder}`);
        hasError = true;
        return;
    }

    try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

        REQUIRED_CONFIG_FIELDS.forEach(field => {
            if (!config[field]) {
                console.error(`  ❌ Erro: Campo obrigatório '${field}' faltando no config.json`);
                hasError = true;
            }
        });

    } catch (e) {
        console.error(`  ❌ Erro: 'config.json' em ${folder} contém um JSON inválido.`);
        hasError = true;
    }
});

if (hasError) {
    process.exit(1);
} else {
    console.log("\n✅ Validação concluída com sucesso!");
    process.exit(0);
}
