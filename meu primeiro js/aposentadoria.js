function aposentados(){
    let nome = (prompt("Digite seu nome."));
    let nascimento = (prompt("Digite o ano que nasceu."));
    let admissao = (prompt("Digite o ano que começou a trabalhar na empresa."));
    let tempo = parseInt(0);
    let idade = parseInt(0);

    idade =(2022 - nascimento)
    tempo = (2022 - admissao)

    if (idade>=60&&tempo>=25){
        alert ("O funcionário " + nome + "requerer aposentadoria, pois tem " + idade + "e " + tempo + " anos de trabalho." )
        }
        else if (idade <65 && tempo <30){
            alert ("O funcionário " + nome + "não requerer aposentadoria, pois não possui idade e/ou tempo de trabalho suficientes.")

        }
}