// tests/finance.test.js
const finance = require("../src/finance");

describe("Testes do Módulo Financeiro", () => {
    
    // Limpar os dados antes de cada teste para um não atrapalhar o outro
    beforeEach(() => {
        finance.limparTransacoes();
    });

    // 1. Caminho Feliz: Adicionar uma receita e verificar o saldo
    test("Deve adicionar uma receita e atualizar o saldo corretamente", () => {
        finance.adicionarTransacao("Salário", 5000, "receita");
        expect(finance.calcularSaldo()).toBe(5000);
    });

    // 2. Caso Limite/Fluxo: Adicionar receita e despesa e ver o saldo líquido
    test("Deve calcular o saldo corretamente após uma receita e uma despesa", () => {
        finance.adicionarTransacao("Bônus", 1000, "receita");
        finance.adicionarTransacao("Aluguel", 800, "despesa");
        expect(finance.calcularSaldo()).toBe(200);
    });

    // 3. Entrada Inválida: Tentar adicionar valor negativo (deve lançar erro)
    test("Deve lançar um erro ao tentar adicionar um valor negativo", () => {
        expect(() => {
            finance.adicionarTransacao("Erro", -50, "receita");
        }).toThrow("O valor deve ser um número maior que zero.");
    });

    // 4. Teste de Integração: Simulando o consumo da API
    test("Deve obter cotações de moedas da API corretamente", async () => {
        // Simulamos a resposta da API nativa (Mock)
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    USDBRL: { ask: "5.00" },
                    EURBRL: { ask: "5.50" }
                })
            })
        );

        const cotacoes = await finance.obterCotacoes();
        
        expect(cotacoes.dolar).toBe(5.00);
        expect(cotacoes.euro).toBe(5.50);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        
        // Limpa o mock após o teste
        global.fetch.mockClear();
    });
});