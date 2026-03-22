#!/bin/bash

# Cores para saída no terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # Sem cor

echo -e "${BLUE}🚀 Iniciando Pipeline de Deploy LexLab...${NC}"

# 1. Verificar Versão do Node
NODE_VER=$(node -v)
echo -e "📦 Ambiente: Node $NODE_VER"

# 2. Limpeza de builds anteriores
if [ -d "dist" ]; then
    echo -e "${BLUE}🧹 Limpando build anterior...${NC}"
    rm -rf dist
fi

# 3. Instalação Automática de Dependências Críticas
echo -e "${BLUE}🛠️  Verificando dependências...${NC}"
npm install

# 4. Executar o Linter Legislativo (O validador que criamos)
echo -e "${BLUE}⚖️  Validando integridade dos Projetos de Lei...${NC}"
npm run lint:leis

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Validação bem-sucedida! Nenhum erro jurídico/técnico encontrado.${NC}"
else
    echo -e "${RED}❌ Falha na validação. O build foi interrompido para evitar erros no site.${NC}"
    exit 1
fi

# 5. Build do Astro (Gerador de Site Estático)
echo -e "${BLUE}🏗️  Construindo a plataforma estática (Astro)...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}⭐ Build finalizado com sucesso em /dist!${NC}"
else
    echo -e "${RED}❌ Erro durante o build do Astro.${NC}"
    exit 1
fi

# 6. Verificação do Índice de Busca
if [ -f "dist/search-index.json" ]; then
    echo -e "${GREEN}🔍 Índice de busca global gerado corretamente.${NC}"
else
    echo -e "${RED}⚠️  Aviso: O índice de busca não foi encontrado. Verifique src/pages/search-index.json.js${NC}"
fi

echo -e "\n${GREEN}===============================================${NC}"
echo -e "${GREEN}🎉 PRONTO PARA O DEPLOY!${NC}"
echo -e "O conteúdo da pasta ${BLUE}/dist${NC} pode ser enviado para:"
echo -e "- GitHub Pages"
echo -e "- Cloudflare Pages"
echo -e "- Vercel ou Netlify"
echo -e "${GREEN}===============================================${NC}"
