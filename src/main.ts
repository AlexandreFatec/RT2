import * as readline from 'readline';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Divisao from './divisao';

let mensagens = new Mensagens();
let calculo;
let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let iniciar = () => {
  leitor.question(`Escolha uma operação para realizar:\n`, (operacao) => {
    if (operacao === 'Sair') {
        console.log(`Encerrando o programa. Obrigado por usar a calculadora!`);
        leitor.close();
    } else {
        leitor.question(`Por favor, digite dois números separados por espaço:\n`, (valor) => {
            let [numero1, numero2] = valor.split(' ').map(Number);

            switch (operacao) {
              case 'Somar':
                  calculo = new Soma();
                  console.log(`Aqui está o resultado da soma: ${calculo.calcular(numero1, numero2)}\n`);
                  iniciar();
                  break;
              case 'Subtrair':
                  calculo = new Subtracao();
                  console.log(`Aqui está o resultado da subtração: ${calculo.calcular(numero1, numero2)}\n`);
                  iniciar();
                  break;
              case 'Multiplicar':
                  calculo = new Multiplicacao();
                  console.log(`Aqui está o resultado da multiplicação: ${calculo.calcular(numero1, numero2)}\n`);
                  iniciar();
                  break;
              case 'Dividir':
                  calculo = new Divisao();
                  console.log(`Aqui está o resultado da divisão: ${calculo.calcular(numero1, numero2)}\n`);
                  iniciar();
                  break;
              default:
                  console.log(`Desculpe, essa operação não é válida. Tente novamente!`);
                  iniciar();
          }
      });
  }
  });
};

mensagens.boasVindas();
mensagens.listarOpcoes();
iniciar();
