import Calculo from "./calculo";

export default class Multiplicacao extends Calculo {
    calcular(numero1: number, numero2: number): number {
        return numero1 * numero2;
    }
}
