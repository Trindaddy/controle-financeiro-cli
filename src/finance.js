// src/finance.js

// Usaremos a memória para armazenar os dados, conforme permitido no edital
let transacoes = [];

function adicionarTransacao(descricao, valor, tipo) {
    if (isNaN(valor) || valor <= 0) {
        throw new Error("O valor deve ser um número maior que zero.");
    }
    if (tipo !== "receita" && tipo !== "despesa") {
        throw new Error("Tipo inválido. Use 'receita' ou 'despesa'.");
    }
    
    const transacao = {
        id: Date.now(),
        descricao,
        valor,
        tipo,
        data: new Date().toLocaleDateString("pt-BR")
    };
    
    transacoes.push(transacao);
    return transacao;
}

function calcularSaldo() {
    return transacoes.reduce((saldo, transacao) => {
        if (transacao.tipo === "receita") {
            return saldo + transacao.valor;
        } else {
            return saldo - transacao.valor;
        }
    }, 0);
}

function listarExtrato() {
    return transacoes;
}

function limparTransacoes() {
    // Essa função será muito útil na hora de rodar nossos testes automatizados
    transacoes = [];
}

async function obterCotacoes() {
    try {
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL");
        if (!response.ok) throw new Error("Erro na comunicação com a API");
        
        const data = await response.json();
        return {
            dolar: parseFloat(data.USDBRL.ask),
            euro: parseFloat(data.EURBRL.ask)
        };
    } catch (error) {
        throw new Error(`Não foi possível obter as cotações no momento. Detalhe: ${error.message}`);
    }
}

// Exportamos as funções para usá-las na interface e nos testes
module.exports = {
    adicionarTransacao,
    calcularSaldo,
    listarExtrato,
    limparTransacoes,
    obterCotacoes
};