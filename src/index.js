// src/index.js

const readline = require("readline-sync");
const finance = require("./finance");

function exibirMenu() {
    console.log("\n--- 💰 FinCLI: Controle Financeiro Pessoal ---");
    console.log("1. Registrar Receita");
    console.log("2. Registrar Despesa");
    console.log("3. Ver Extrato e Saldo");
    console.log("0. Sair");
    return readline.question("Escolha uma opcao: ");
}

function main() {
    let rodando = true;

    while (rodando) {
        const opcao = exibirMenu();

        switch (opcao) {
        case "1":
            const descReceita = readline.question("Descricao da receita (ex: Salario): ");
            const valReceita = parseFloat(readline.question("Valor (R$): "));
            try {
                finance.adicionarTransacao(descReceita, valReceita, "receita");
                console.log("✅ Receita registrada com sucesso!");
            } catch (error) {
                console.log(`❌ Erro: ${error.message}`);
            }
            break;
            
        case "2":
            const descDespesa = readline.question("Descricao da despesa (ex: Conta de Luz): ");
            const valDespesa = parseFloat(readline.question("Valor (R$): "));
            try {
                finance.adicionarTransacao(descDespesa, valDespesa, "despesa");
                console.log("✅ Despesa registrada com sucesso!");
            } catch (error) {
                console.log(`❌ Erro: ${error.message}`);
            }
            break;

        case "3":
            console.log("\n--- 📊 Seu Extrato ---");
            const extrato = finance.listarExtrato();
            if (extrato.length === 0) {
                console.log("Nenhuma transação registrada ainda.");
            } else {
                extrato.forEach(t => {
                    const sinal = t.tipo === "receita" ? "+" : "-";
                    console.log(`[${t.data}] ${t.descricao}: ${sinal} R$ ${t.valor.toFixed(2)}`);
                });
            }
            console.log(`\n💰 Saldo Atual: R$ ${finance.calcularSaldo().toFixed(2)}`);
            break;

        case "0":
            console.log("Saindo... Cuide bem do seu dinheiro! Até logo.");
            rodando = false;
            break;

        default:
            console.log("❌ Opção inválida. Digite um número de 0 a 3.");
        }
    }
}

// Inicia a aplicação
main();