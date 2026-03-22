import fs from 'node:fs';
import path from 'node:path';

const LEIS_DIR = './src/content/leis';
const REQUIRED_CONFIG_FIELDS = ['id', 'titulo', 'autor', 'status', 'tags', 'github_repo'];

let hasError = false;

console.log("🔍 Iniciando validação dos projetos legislativos...");

if (!fs.existsSync(LEIS_DIR)) {
    console.error("❌ Erro: Diretório de leis não encontrado.");
    process.exit(1);
}

const folders = fs.readdirSync(LEIS_DIR).filter(f =>
fs.lstatSync(path.join(LEIS_DIR, f)).isDirectory()
);

folders.forEach(folder => {
    const projectPath = path.join(LEIS_DIR, folder);
    const configPath = path.join(projectPath, 'config.json');

    console.log(`\n📂 Verificando projeto: [${folder}]`);

    // 1. Verificar config.json
    if (!fs.existsSync(configPath)) {
        console.error(`  ❌ Erro: Arquivo 'config.json' ausente em ${folder}`);
        hasError = true;
        return;
    }

    // 2. Validar Conteúdo do JSON
    try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

        // Verificar campos obrigatórios
        REQUIRED_CONFIG_FIELDS.forEach(field => {
            if (!config[field]) {
                console.error(`  ❌ Erro: Campo obrigatório '${field}' faltando no config.json`);
                hasError = true;
            }
        });

        // Verificar se o ID no JSON é igual ao nome da pasta (evita erros de rota)
        if (config.id !== folder) {
            console.error(`  ❌ Erro: O 'id' no JSON (${config.id}) deve ser igual ao nome da pasta (${folder})`);
            hasError = true;
        }

        // Verificar se tags é um array
        if (!Array.isArray(config.tags)) {
            console.error(`  ❌ Erro: O campo 'tags' deve ser uma lista (array)`);
            hasError = true;
        }

    } catch (e) {
        console.error(`  ❌ Erro: 'config.json' em ${folder} contém um JSON inválido.`);
        hasError = true;
    }

    // 3. Verificar pastas de conteúdo
    const subfolders = ['docs', 'artigos'];
    subfolders.forEach(sub => {
        if (!fs.existsSync(path.join(projectPath, sub))) {
            console.warn(`  ⚠️  Aviso: Pasta '${sub}' não encontrada em ${folder}.`);
        }
    });
});

if (hasError) {
    console.log("\n🛑 Validação falhou. Corrija os erros acima antes de prosseguir.");
    process.exit(1);
} else {
    console.log("\n✅ Todos os projetos estão íntegros e seguem o padrão LexLab!");
    process.exit(0);
}
