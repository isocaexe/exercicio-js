function calcularimc(){
    let nome =prompt("Digite seu nome.");
    let peso = parseFloat(prompt("Digite seu peso."));
    let altura =parseFloat(prompt("Digite sua altura."));
    let imc = 0;
    let resultado="";

    imc = peso / (altura * altura); 

    if (imc <18.5){
        resultado = "abaixo do peso."
    }
    else if (imc <=25){
        resultado = "peso normal."
    }
    else if (imc <=30){
        resultado = "sobrepeso"
    }
    else if (imc <=35){
        resultado = "obesidade"
    }
    else if (imc >=35 && imc <40){
        resultado ="obesidade 2"
    }
    else if (imc >=40){
        resultado ="obesidade 3"
    }
    console.log(resultado)
    console.log(imc)

    document.write(nome + " possui o imc " + imc + " e está " + resultado);
    alert(nome + " possui o imc " + imc + " e está " + resultado);
}