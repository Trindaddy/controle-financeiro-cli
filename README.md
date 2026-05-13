# 💰 FinCLI - Controle Financeiro Pessoal

## 🚀 Deploy (Link Público)
    Acesse a aplicação pronta para uso aqui: [https://codesandbox.io/p/github/Trindaddy/controle-financeiro-cli/main?import=true]

[![Validação Contínua (CI)](https://github.com/Trindaddy/controle-financeiro-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/Trindaddy/controle-financeiro-cli/actions/workflows/ci.yml)

**Versão:** 1.0.0

---

## 🎯 Sobre o Projeto

**O Problema (Dor Real):** A falta de previsibilidade e organização financeira do dia a dia leva muitas pessoas a perderem o controle de seus gastos, dificultando o planejamento e causando estresse.

**A Solução:** O FinCLI é uma aplicação de linha de comando (CLI) simples e direta que permite registrar receitas e despesas rapidamente, gerando um extrato e calculando o saldo atual.

**Público-alvo:** Jovens adultos, estudantes e profissionais que buscam um controle financeiro rápido e sem a complexidade de planilhas pesadas ou aplicativos cheios de anúncios.

---

## 🛠 Tecnologias Utilizadas

| Categoria        | Tecnologia          |
|------------------|---------------------|
| Linguagem        | JavaScript (Node.js) |
| Interface        | CLI (`readline-sync`) |
| Testes           | Jest                |
| Qualidade        | ESLint              |
| CI/CD            | GitHub Actions      |

---

## ⚙️ Como Executar

### 1. Instalação

Certifique-se de ter o [Node.js](https://nodejs.org) instalado. Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Trindaddy/controle-financeiro-cli.git
cd controle-financeiro-cli
npm install
```

### 2. Execução

Para iniciar o sistema e acessar o menu interativo:

```bash
npm start
```

### 3. Testes e Lint

```bash
# Executa os testes automatizados (caminho feliz, fluxos alternativos e erros)
npm test

# Executa a verificação estática do código
npm run lint
```

---

## 👨‍💻 Autor

Desenvolvido por **Abner Trindade** para o Bootcamp Desafio Inicial.

🔗 [github.com/Trindaddy/controle-financeiro-cli](https://github.com/Trindaddy/controle-financeiro-cli)

---

### Passo 8: O PDF de Entrega (Checklist Final)
Conforme o barema de avaliação (image_775073.png), o seu PDF deve ser objetivo. Crie um documento com:

*   **Identificação:** Abner Trindade de Aguiar Fernandes.
*   **Link do Repositório GitHub:** (Deve estar público e com o merge da branch `entrega-intermediaria` feito).
*   **Link do Deploy:** (O link do CodeSandbox onde o avaliador pode testar).
*   **Resumo da Evolução:** "Nesta etapa, integramos a AwesomeAPI para cotação de moedas em tempo real, implementamos testes de integração com mocks de rede e utilizamos GitHub Issues para gestão da demanda."

**Dica de mestre:** Verifique se o Badge de build no seu README está **verde**. Se estiver, você provou que sua "Manutenção Geral" está impecável! 