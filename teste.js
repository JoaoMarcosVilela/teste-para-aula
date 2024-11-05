var contador = 0;

function simulacao(){

    if(contador == 5){
        return "Testes finalizados";
    }
    contador+=1;
    return `echo rodando ${contador}`;
}