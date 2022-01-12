    function escolha (decidir) {
        var decidir = prompt("Qual a sua decisão?");

            if (decidir == 1) {
                location.replace("robo_2_1.html");
            }
            else if (decidir==2) {
                location.replace("robo_2_2.html");
            }
            else {
                alert ("Opção Inválida");
            }
        }

