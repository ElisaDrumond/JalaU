import java.util.Scanner;
public class Atividade13 {
    public static void main(String[] args) {

        int[] valores = new int[16];
        int i;
        Scanner scanner = new Scanner(System.in);

        for (i = 0; i < 16; i++) {
            System.out.print("Informe um número: ");
            valores[i] = scanner.nextInt();
        }

        for (i = 8; i <= 15; i++) {
            System.out.print(i + ": " + valores[i] + "\t\t");
        }

        for (i = 0; i <= 7; i++) {
            System.out.print(i + ": " + valores[i] + "\t\t");
        }
    }
}