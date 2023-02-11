import java.util.Scanner;
public class Atividade21 {
    public static void main(String[] args) {

        int matriz[][]= new int[4][4];
        int i, j;
        Scanner scanner = new Scanner(System.in);

        for (i = 0; i < 4; i++) { //Preencher a linha
            for (j = 0; j < 4; j++) { //Preenche a coluna
                System.out.print("Informe um número: ");
                matriz[i][j] = scanner.nextInt(); //Preenche a célula
            }
        }

        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
        }
    }
}