import java.util.Scanner;
public class Atividade12 {
    public static void main(String[] args) {

        int[] valores = new int[10];
        int i;
        Scanner scanner = new Scanner(System.in);

        for (i = 0; i < 10; i++) {
            System.out.print("Informe um número: ");
            valores[i] = scanner.nextInt();
        }

        System.out.println("Números ímpares! ");
        for (i = 0; i < 10; i++) {

            if (valores[i] % 2 > 0) {
                System.out.print("Número: " + valores[i] + " posição: " + i + "\t");
            }
        }
    }
}