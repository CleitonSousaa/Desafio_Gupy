function VerificacaoFibo(n){
    if(n === 0 || n === 1){
        return true;
    }
    let anterior = 0;
    let atual = 1;
    while(atual <= n){
        if(atual === n){
            return true;
        }
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    return false
}

const numero = 7;

if(VerificacaoFibo(numero)){
    console.log(numero + " pertence a sequencia fibonacci");
}else{
    console.log(numero + " não pertence a sequencia fibonacci");
}