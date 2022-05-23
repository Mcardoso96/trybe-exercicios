const custoProduto = 2;
const valorVenda = 5;

if (custoProduto >= 0 && valorVenda >= 0) {
    const valorCustoTotal = custoProduto * 1.2;
    const lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
    console.log('Erro, os valores não podem ser negativos!');
};