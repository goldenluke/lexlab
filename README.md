# ⚖️ LexLab — Law as Code para o Processo Legislativo

> A versão digital do Direito Achado na Rua  
> Infraestrutura aberta para construção, auditoria e evolução de normas jurídicas

---

## 🌐 Plataforma

🔗 https://lexlab.onrender.com/  
📦 Código-fonte: https://github.com/goldenluke/lexlab

---

## 👤 Autor

**Lucas Amaral Dourado**  
Universidade Federal do Tocantins (UFT)

---

## 🧠 Visão

A LexLab é uma plataforma de inteligência legislativa que propõe uma transformação estrutural no modo como normas jurídicas são concebidas, discutidas e refinadas.

Parte-se da premissa de que o processo legislativo contemporâneo sofre com:
- opacidade decisória  
- baixa rastreabilidade de influências  
- participação social limitada e pouco efetiva  

A LexLab propõe uma alternativa:

> tratar o Direito como um sistema versionado, auditável e colaborativo — tal como o software livre.

Nesse modelo, leis deixam de ser textos estáticos e passam a ser organismos vivos, passíveis de evolução contínua, revisão técnica e validação coletiva.

---

## ⚙️ Arquitetura Conceitual

A plataforma se estrutura sobre três fundamentos centrais:

### 📜 Direito como Processo
A norma não é um produto final, mas um fluxo contínuo de construção e revisão.

### 🔍 Transparência Radical
Toda modificação é:
- registrada  
- auditável  
- atribuída  

Eliminando a opacidade típica do processo legislativo tradicional.

### 🧑‍⚖️ Soberania Técnica
A participação popular deixa de ser meramente simbólica e passa a ser tecnicamente estruturada.

O cidadão torna-se:
> co-autor qualificado da norma

---

## 🚀 Funcionalidades

### 🧾 Versionamento Legislativo
- Histórico completo de alterações  
- Registro de autoria, data e justificativa  
- Linha do tempo normativa  

---

### 🔀 Diff Jurídico (estilo GitHub)
- Comparação entre versões  
- Destaque de alterações  
- Análise palavra por palavra  

---

### 🔍 Comparação Lado a Lado
- Versão anterior × versão atual  
- Leitura crítica e contextualizada  

---

### 📊 Heatmap de Impacto Normativo

Classificação automática com base em complexidade textual:

- 🟢 Baixo → ajustes técnicos  
- 🟡 Médio → modificações relevantes  
- 🔴 Alto → alterações estruturais  

---

### ⚖️ Análise Semântica

Classificação heurística das mudanças:

- Expansão de direitos  
- Restrição normativa  
- Organização administrativa  
- Ajuste técnico  

---

### ✍️ Edição Colaborativa
- Botão “Sugerir edição”  
- Integração com GitHub  
- Uso de forks e pull requests  
- Justificação técnica obrigatória  

---

### 👥 Governança Aberta
- Processo distribuído  
- Histórico público  
- Responsabilização técnica  

---

### 📜 Fundamentação Estruturada
- Separação entre exposição de motivos e dispositivos  
- Markdown renderizado  
- Versionamento integral da argumentação  

---

## 📦 Estrutura do Projeto

src/  
 ├── pages/  
 │   ├── index.astro  
 │   └── projeto/[id].astro  
 │  
 ├── leis/  
 │   └── projetos-leis/  
 │       └── <projeto>/  
 │           ├── config.json  
 │           ├── docs/  
 │           └── artigos/  
 │  
 ├── components/  
 ├── layouts/  
 └── utils/  

---

## 🧾 Exemplo de Configuração

{
  "id": "pl-neuro-sus",
  "titulo": {
    "pt": "Garantia de Acesso à Avaliação Neuropsicológica no SUS",
    "en": "Access to Neuropsychological Assessment in Public Health"
  },
  "autor": "Comunidade de Saúde e Direito",
  "status": "Em Desenvolvimento",
  "tags": ["Saúde", "SUS"],
  "github_repo": "https://github.com/goldenluke/lexlab"
}

---

## ⚖️ Caso de Uso

Projeto de Lei: Garantia de Acesso à Avaliação Neuropsicológica no SUS

- Enfrenta uma lacuna assistencial relevante na saúde mental brasileira  
- Propõe institucionalização da avaliação neuropsicológica  
- Estruturado como prova de conceito da plataforma  

---

## 📚 Fundamentação Jurídica

A proposta dialoga diretamente com a Lei de Introdução às Normas do Direito Brasileiro (LINDB):

- Art. 20 → decisões devem considerar consequências práticas  
- Art. 21 → necessidade de motivação adequada  
- Art. 22 → consideração das dificuldades reais da gestão pública  

A LexLab operacionaliza esses princípios ao permitir:

- revisão técnica antecipada  
- validação empírica das propostas  
- construção normativa baseada em evidências  

---

## 🧠 Filosofia

### Direito Achado na Rua (versão digital)

A LexLab expande a noção de que o Direito emerge da sociedade.

A plataforma cria condições técnicas para que essa produção coletiva seja:

- estruturada  
- auditável  
- juridicamente relevante  

---

### Law as Code

O Direito passa a ser tratado como:

- código versionado  
- sistema auditável  
- objeto de engenharia  

---

### Epistemologia Normativa

Modelo tradicional:
- texto fechado  
- autoria difusa  
- revisão opaca  

Modelo LexLab:
- sistema aberto  
- autoria rastreável  
- revisão auditável  

---

## 🔓 Licenciamento

### 🖥️ Infraestrutura da Plataforma
Licença **MIT**

Permite:
- uso irrestrito  
- modificação  
- redistribuição  
- integração institucional  

---

### ⚖️ Conteúdo Jurídico (Projetos de Lei)

Licença **Creative Commons CC BY-SA 4.0**

Garante:
- livre uso e adaptação  
- obrigatoriedade de atribuição  
- compartilhamento sob a mesma licença  

Protege contra:
- apropriação privada  
- fechamento do conhecimento jurídico  

---

## 🧑‍💻 Como Contribuir

1. Faça um fork do repositório  
2. Edite uma minuta ou artigo  
3. Submeta um Pull Request  
4. Justifique tecnicamente a alteração  

---

## 🔮 Roadmap

- Diff semântico avançado (NLP)  
- Classificação jurídica automática  
- Score de constitucionalidade  
- Simulação de impacto normativo  
- Interface de edição inline  
- Integração com bases públicas (SUS, CNES, SIH)  

---

## 🚀 Propósito

A LexLab não é apenas uma ferramenta tecnológica.

É uma proposta institucional.

Busca responder a uma questão central:

> É possível democratizar o processo legislativo sem perder rigor técnico?

A resposta proposta é:

> Sim — desde que tratemos a lei como código  
> e o povo como co-autor qualificado da norma  

---

## ⭐ Contribua

Se você acredita em:

- transparência institucional  
- ciência aplicada ao direito  
- soberania popular com rigor técnico  

Você já faz parte deste projeto.
