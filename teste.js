var contador = 0;

function rodarTeste() {
    if (contador === 5) {
        return console.log("Testes finalizados");
    }
    contador += 1;
    console.log(`Rodando teste ${contador}`);
    setTimeout(rodarTeste, 1000);
}

rodarTeste();
