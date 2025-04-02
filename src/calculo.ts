export default abstract class Calculo {
    public abstract calcular(numero1: number, numero2: number): number;

    public descricao(): string {
        return "Esta é uma classe abstrata para cálculos matemáticos.";
    }
}