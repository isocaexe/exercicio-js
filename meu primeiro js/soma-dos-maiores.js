function somadosmaiores(){
let x = parseInt (prompt("Digite um número."))
let y = parseInt (prompt("Digite mais um número."))
let z = parseInt (prompt("Digite outro número."))

if (z < x && x < y) {
    alert (x + y)
}
else if (y < x && x < z){
    alert (x + z)
}
else{
    alert(y + z)
}
}
    