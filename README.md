# 📖 Guia de Governança e Colaboração: LexLab + GitHub

Este documento detalha a filosofia por trás da **LexLab** e fornece um roteiro técnico para cidadãos, juristas e especialistas que desejam atuar na redação de leis.

---

## 🏛️ Parte 1: A Argumentação — Por que GitHub para Leis?

O processo legislativo tradicional é frequentemente criticado por ser uma "caixa-preta": as discussões ocorrem em gabinetes fechados e a versão final de um texto pode surgir sem que se saiba exatamente quem alterou qual parágrafo e por qual motivo técnico.

A LexLab inverte essa lógica ao aplicar os princípios do **Open Source (Código Aberto)** ao Direito:

### 1. Rastreabilidade e Fé Pública Digital
No GitHub, cada alteração é um `commit`. Isso significa que temos um registro imutável de:
- **QUEM** sugeriu a mudança;
- **QUANDO** ela foi feita;
- **POR QUE** (a justificativa técnica anexada).
Isso elimina o anonimato de interesses escusos e garante que a lei seja fundamentada em argumentos públicos.

### 2. O Conceito de "Law as Code" (Lei como Código)
Uma lei, assim como um software, é um sistema de regras que "roda" na sociedade. Se o código de um software tem bugs, o sistema trava. Se uma lei tem lacunas técnicas ou contradições jurídicas, ela gera insegurança e injustiça.
- **Linter Legislativo:** Nossa plataforma roda scripts automáticos que verificam se o projeto está bem estruturado.
- **Versionamento:** Podemos comparar a "Versão 1.0" da lei com a "Versão 2.0" instantaneamente, vendo o que foi vetado ou adicionado com destaque visual (diff).

### 3. Democracia de Alta Intensidade
A participação popular deixa de ser apenas um "voto" a cada quatro anos ou um "comentário em rede social" para se tornar **trabalho técnico**. O cidadão especialista (ex: um médico revisando uma lei de saúde) atua diretamente na construção do texto, oferecendo ao parlamentar uma base científica pronta para ser protocolada.

---

## 🛠️ Parte 2: Como Usar o GitHub (Para Não-Programadores)

O GitHub pode parecer intimidador, mas ele utiliza apenas três conceitos que todo cidadão interessado em política já conhece, apenas com nomes diferentes:

### 1. O Fork (O Gabinete Virtual)
Quando você clica em "Sugerir Edição", o GitHub pede para fazer um **Fork**.
- **O que é:** É como se você tirasse uma xerox oficial do projeto para o seu "gabinete virtual". 
- **Segurança:** Você pode apagar tudo, mudar palavras e testar ideias no seu Fork. Nada disso altera o site oficial até que sua ideia seja aprovada.

### 2. O Commit (O Protocolo com Justificativa)
Após editar o texto, você faz um **Commit**.
- **O que é:** É o ato de salvar sua alteração com uma "nota de empenho". 
- **Regra de Ouro:** Todo commit deve ter uma mensagem clara (ex: "Ajuste do prazo de 30 para 60 dias no Art. 5º") e uma justificativa (ex: "Conforme nota técnica da OMS, o diagnóstico demanda mais tempo").

### 3. O Pull Request (O Protocolo na Mesa Diretora)
O **Pull Request (PR)** é o momento mais importante.
- **O que é:** É quando você envia um sinal para os administradores da LexLab dizendo: "Terminei minha sugestão no meu rascunho, peço que analisem para incluir no projeto oficial".
- **Debate:** É no PR que ocorre a "Audiência Pública Digital". Outros usuários comentarão sua sugestão, pedindo melhorias ou apoiando o texto.

---

## 🚀 Parte 3: Passo a Passo na Plataforma LexLab

### Passo 1: Autenticação
No topo da página, clique em **"Entrar com GitHub"**. Isso vincula sua identidade às suas futuras contribuições. Se não tiver conta, o site te guiará para criar uma em 1 minuto.

### Passo 2: Audiência Pública (Giscus)
Antes de editar o texto, role até o final de qualquer projeto de lei. 
- Utilize a seção **Audiência Pública Digital** para ler o que outros estão falando.
- Deixe um comentário ou uma "reação" (👍, 🎉, 🚀) nos pontos que você concorda.

### Passo 3: Edição de Seção
Ao ler os artigos, se perceber um erro ou oportunidade de melhora:
1. Clique no botão **"Sugerir Edição nesta seção"** logo abaixo do texto.
2. Você será levado ao editor do GitHub. Clique no ícone de **Lápis** (Edit).
3. Faça as alterações no editor de texto.
4. Clique em **"Commit changes"** (preencha o título e a justificativa).
5. Clique em **"Create Pull Request"**.

---

## ✍️ Parte 4: Gramática de Redação (Markdown)

Para que o texto apareça formatado corretamente, usamos **Markdown**. É mais simples que o Word:

- **Artigos:** Use `## Artigo 1º` (isso cria um título médio).
- **Incisos/Alíneas:** Use hífens `- item`.
- **Termos Técnicos:** Use `**termo**` para **negrito**.
- **Referências Jurídicas:** Use `> texto` para criar blocos de citação (recuados e em itálico).
- **Links de Evidências:** Use `[título do estudo](link-da-internet)`.

---

## ⚖️ Conclusão

A LexLab não é apenas tecnologia; é um **método de resistência contra a inefetividade do Direito**. Ao unir a precisão do software com a legitimidade da participação popular, estamos codificando o futuro da democracia brasileira.

**Seja bem-vindo(a) à relatoria coletiva.**
