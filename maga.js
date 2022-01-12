    function escolha (decidir) {
        var decidir = prompt("Qual a sua decisão?");


            if (decidir == 1) {
                location.replace("guerreiro_1_1.html");
            }
            else if (decidir==2) {
                location.replace("guerreiro_1_2.html");
            }
            else if (decidir==3){
                location.replace("guerreiro_1_3.html");
            }
            else {
                alert ("Opção Inválida");
            }
        }

