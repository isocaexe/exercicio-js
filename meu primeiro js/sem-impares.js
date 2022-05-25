function semImpares(){
    
        let numero = parseFloat(0);
        let i = (0);
        let m = parseInt(0);
      
        while (i<=100){
          let m = parseInt(prompt("Digite um Numero"));
          
      
          if (m % 2 == 0) {
            numero = numero + n;
              i = i +1
          }
           if (m == 0) {
            document.write("Finalizando");
            break;
          }
      
        }
      
        alert("A média é = " + numero / (i - 1));
        
        console.log(i)
      }