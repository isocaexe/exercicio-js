function imparepar(){
    let numero = parseFloat(prompt("Digite um número."));

    if (numero %2 ==0 ){
        document.write ("O número é par.")
    }
    else if(numero %2==1){
        document.write ("O número é ímpar.")
    }
}