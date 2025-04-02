export default class Mensagens {

    public boasVindas = () => {
        console.log(`\nCalculadora.\n`)
    }

    public listarOpcoes = () => {
        console.log(`Escolha uma operação disponível:`)
        console.log(`Somar`)
        console.log(`Subtrair`)
        console.log(`Multiplicar`)
        console.log(`Dividir`)
        console.log(`\nDigite "Sair" para encerrar o programa.\n`)
    }
}
