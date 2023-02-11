import java.util.Scanner;
public class Atividade11 {
    public static void main(String[] args) {

        int[] valores = new int[12];
        int i, x, y, soma;
        Scanner scanner = new Scanner(System.in);

        for (i = 0; i < 12; i++) {
            System.out.print("Informe um número: ");
            valores[i] = scanner.nextInt();
        }

        System.out.print("Informe a posição do primeiro número: ");
        x = scanner.nextInt();
        System.out.print("Informe a posição do segundo número: ");
        y = scanner.nextInt();

        soma = valores[x] + valores[y];

        System.out.println(valores[x] + " + " + valores[y] + " = " + soma);
    }
}