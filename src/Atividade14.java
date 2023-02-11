import java.util.Scanner;
public class Atividade14 {
    public static void main(String[] args) {

        int[] valores = new int[20];
        int i, numero;
        Scanner scanner = new Scanner(System.in);

        for (i = 0; i < 20; i++) {
            System.out.print("Informe um número: ");
            valores[i] = scanner.nextInt();
        }

        System.out.println("Informe o número a ser procurado no Array: ");
        numero = scanner.nextInt();

        for (i = 0; i < 20; i++) {

            if (valores[i] == numero) {
                System.out.print("Número " + numero + " encontrado!" + " Posição " + i);
            }
        }
    }
}