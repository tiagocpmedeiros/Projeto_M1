    function escolha (decidir) {

        var decidir = prompt("Qual a sua decisão?");


            if (decidir == 1) {
                location.replace("guerreiro_3_1.html");
            }
            else if (decidir==2) {
                location.replace("guerreiro_3_2.html");
            }
            else if (decidir==3){
                location.replace("guerreiro_3_3.html");
            }
            else {
                alert ("Opção Inválida");
            }
        }