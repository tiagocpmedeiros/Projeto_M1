function btn (){
    function escolha (decidir) {

        while (decidir !=1||2||3){

            if (decidir = 1) {
                location.replace("./guerreiro.html");
            }
            else if (decidir=2) {
                location.replace("./maga.html");
            }
            else if (decidir=3){
                location.replace("./robo.html");
            }
        }

    var decidir = prompt("Qual a sua decisão?");
    escolha(decidir);   
    
    }
  
}