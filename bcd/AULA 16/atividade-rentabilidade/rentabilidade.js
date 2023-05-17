const aportes = [
    { mes: 'Janeiro', aporte: 500, juros: 0.001 },
    { mes: 'Fevereiro', aporte: 300, juros: 0.003 },
    { mes: 'Março', aporte: 250, juros: 0.005 },
    { mes: 'Abril', aporte: 300, juros: 0.01 },
    { mes: 'Maio', aporte: 100, juros: 0.007 },
    { mes: 'Junho', aporte: 0, juros: 0.005 },
    { mes: 'Julho', aporte: 0, juros: 0.003 },
    { mes: 'Agosto', aporte: 300, juros: 0.008 },
    { mes: 'Setembro', aporte: 400, juros: 0.011 },
    { mes: 'Outubro', aporte: 200, juros: 0.01 },
];

async function calcularMontante() {
    let acumulado = 0;
    for (const aporte of aportes) {
        acumulado += aporte.aporte;
        console.log(`Acumulado investido em ${aporte.mes}: R$${acumulado.toFixed(2)}`);
        await esperarMeioSegundo();
        acumulado *= 1 + aporte.juros;
    }
}

function esperarMeioSegundo() {
    return new Promise(resolve => setTimeout(resolve, 500));
}

calcularMontante();
