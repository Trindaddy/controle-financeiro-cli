# 💰 FinCLI — Controle Financeiro Pessoal
 
**Versão:** `1.0.2` (Release Estável)
 
O FinCLI é uma solução robusta em linha de comando para gestão de finanças pessoais, desenvolvida para unir simplicidade e automação técnica.
 
---
 
## 🚀 Execução Rápida (Deploy via NPM)
 
Não precisa clonar o repositório para testar! Se você tem o Node.js instalado, execute a aplicação agora diretamente do registro oficial do NPM:
 
```bash
npx @trindaddy/fincli@latest
```
 
---
 
## 🎯 Sobre o Projeto
 
**O Problema (Dor Real):** A falta de previsibilidade financeira causa estresse e desorganização. Muitas soluções são complexas demais ou cheias de anúncios.
 
**A Solução:** Uma ferramenta CLI *(Command Line Interface)* focada em agilidade, permitindo registros rápidos de fluxo de caixa e cotações em tempo real.
 
**Público-alvo:** Desenvolvedores e profissionais que buscam controle financeiro direto no terminal.
 
---
 
## 🆕 Novidades da Versão Intermediária
 
- **Integração com API Externa:** Consumo da AwesomeAPI para conversão de saldo em Dólar e Euro em tempo real.
- **Testes de Integração:** Implementação de mocks de rede com Jest para validar a comunicação com serviços externos.
- **Deploy Profissional:** Publicação do pacote no NPM Registry sob escopo `@trindaddy`.
---
 
## 🛠 Tecnologias Utilizadas
 
| Categoria  | Tecnologia                  |
|------------|-----------------------------|
| Linguagem  | JavaScript (Node.js)        |
| Interface  | CLI (readline-sync)         |
| Integração | Fetch API (AwesomeAPI)      |
| Testes     | Jest (Unitários e Integração) |
| Qualidade  | ESLint (Flat Config v9+)    |
| CI/CD      | GitHub Actions              |
 
---
 
## ⚙️ Desenvolvimento Local
 
### 1. Instalação
 
```bash
git clone https://github.com/Trindaddy/controle-financeiro-cli.git
cd controle-financeiro-cli
npm install
```
 
### 2. Rodando os Testes e Qualidade
 
Essenciais para garantir que novas funcionalidades não quebrem o sistema:
 
```bash
# Executa todos os testes (Unitários e Integração com Mocks)
npm test
 
# Executa a análise estática de código
npm run lint
```
 
---
 
## 📂 Estrutura do Projeto
 
```
├── .github/workflows/  # Configuração do CI/CD (GitHub Actions)
├── src/
│   ├── finance.js      # Regras de negócio e consumo de API
│   └── index.js        # Interface de usuário (Menu CLI)
├── tests/              # Testes automatizados
├── package.json        # Manifesto do projeto e dependências
└── eslint.config.js    # Configurações de padronização de código
```
 
---
 
## 📝 Notas de Versão
 
- **v1.0.0:** Estrutura inicial e CRUD básico.
- **v1.0.1:** Preparação para deploy e configuração de binários.
- **v1.0.2:** Hotfix de lógica no menu de cotações e estabilização do comando `npx`.
---
 
## 👨‍💻 Autor
 
Desenvolvido por **Abner Trindade** durante o Bootcamp.
 
[![GitHub](https://img.shields.io/badge/GitHub-Trindaddy-181717?style=flat&logo=github)](https://github.com/Trindaddy)
[![NPM](https://img.shields.io/badge/NPM-%40trindaddy%2Ffincli-CB3837?style=flat&logo=npm)](https://www.npmjs.com/package/@trindaddy/fincli)
