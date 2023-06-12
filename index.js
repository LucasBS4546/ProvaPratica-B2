// QUESTÃO 1 - DETECTAR SE UM NÚMERO É PRIMO OU NÃO

function calcularPrimo() {

    var numero = parseFloat(prompt("Escreva um número"));

    var primo = 1; //É primo
    //Os IFs checam se NÃO é primo. Logo, se nenhum IF ativar, primo=1.

    console.log(numero);

    if (numero == 1 || numero == 0) {

        primo = 2; //Não é primo nem composto

    } else if (numero > 1) {

        for (let i = 2; i < numero; i++) {

            //Um primo jamais terá resto 0 dividido por qualquer número que não seja ele mesmo e 1.
            if (numero % i == 0 || numero < 0) {

                primo = 0; //Não é primo
                break;

            }

        }

    }
    
    return primo; 
    //primo=0 significa que não é primo
    //Primo=1 significa que é primo
    //primo=2 significa que não é primo e nem composto. 
    //Os números 0 e 1 não são considerados nem primos nem compostos. (fonte: https://americanboard.org/Subjects/elementary-education/numbers-in-their-prime/)

}


// Essa é a função que deve ser chamada
//             V
function detectorDePrimo() {

    primo = calcularPrimo();

    if (primo == 1) {

        alert('É primo!')

    } else if (primo == 0) {

        alert('Não é primo!')

    } else if (primo == 2) {

        alert('O número 1 não é nem primo nem composto!')

    }
}




// QUESTÃO 2 - VERIFICAR CRITÉRIOS PARA SENHA

// Essa é a função que deve ser chamada
//             V
function verificarSenha() {

    var senha = prompt("Digite sua senha.")

    caracteres = senha.split("") 
    //Separa a string em uma array contendo todos os caracteres como coisas individuais.

    console.log(caracteres)

    if(caracteres.length < 8) {

        alert('Sua senha deve ter, no mínimo, 8 caracteres!')
        return

    } else if(caracteres.includes(
        "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" || "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z"
        )) {

            if(caracteres.includes(
            "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z"
            )) {

                //Por algum motivo, usar os métodos de "0" || "1"... não funcionaram, então tive de fazer assim:
                var zero = /0/
                var um = /1/
                var dois = /2/
                var tres = /3/
                var quatro = /4/
                var cinco = /5/
                var seis = /6/
                var sete = /7/
                var oito = /8/
                var nove = /9/

                var resultado0 = zero.test(senha);
                var resultado1 = um.test(senha);
                var resultado2 = dois.test(senha);
                var resultado3 = tres.test(senha);
                var resultado4 = quatro.test(senha);
                var resultado5 = cinco.test(senha);
                var resultado6 = seis.test(senha);
                var resultado7 = sete.test(senha);
                var resultado8 = oito.test(senha);
                var resultado9 = nove.test(senha);
                //'Test' verifica se aquele carácter está na string especificada.

                if(resultado0 || resultado1 || resultado2 || resultado3 || resultado4 || resultado5
                || resultado6 || resultado7 || resultado8 || resultado9) {

                    alert('Sua senha foi inserida corretamente e é válida!')

                } else {

                    alert('Sua senha deve conter pelo menos um número!')

                }

            } else {

                alert('Sua senha deve conter pelo menos uma letra minúscula!')

            }


        } else {

            alert('Sua senha deve conter pelo menos uma letra maiúscula!')

        }

}



// QUESTÃO 3 - RETORNAR FATORIAL DO NÚMERO

// Essa é a função que deve ser chamada
//             V
function entradaNumero(){

    var numeroInput = parseFloat(prompt("Digite um número"));
    var fatorialResultante = fatorial(numeroInput);
    alert('O fatorial de ' + numeroInput + ' é ' +fatorialResultante + '!');

}

function fatorial(numero) {

    var resultado = numero
    //Um loop usará isso a frente.

    if(numero < 0) {

        return 'Não existe fatorial de números negativos!';

    } else if(numero == 1) {

        return 1;

    } else {

        //Pega-se o número inicial (resultado) e multiplica por ele menos um, sucessivamente, até ele ser 1.
        while(numero > 1) {

            numero--;
            resultado = resultado * numero

        }
        return resultado;
    }

}


// QUESTÃO 4 - DETERMINAR SE UM NÚMERO É UM QUADRADO PERFEITO

// Essa é a função que deve ser chamada
//             V
function numeroDeEntrada() {

    var numeroInput = parseFloat(prompt("Digite um número!"))
    var resultado = raizQuadrada(numeroInput);

}

function raizQuadrada(numero) {

    var raiz = Math.sqrt(numero);
    var raizArredondadaCima = Math.ceil(raiz); //Arredonda para cima
    var raizArredondadaBaixo = Math.floor(raiz); //Arredonda para baixo

    // A raiz elevada ao quadrado será o número inicial caso o quadrado seja perfeito.
    if(numero == raiz**2) {

        // Números como 1025 tem raiz muito próxima de um número inteiro, fazendo o JS considerar como quadrado perfeito quando não é.
        if (raizArredondadaBaixo == raizArredondadaCima) {

            alert('O número é um quadrado perfeito!')


        } else {

            alert('O número não é um quadrado perfeito!')

        }

    } else {

        alert('O número não é um quadrado perfeito!')

    }

}
