import java.util.Arrays;

public class java_array {
    public static void main(String[] args) {
    
        int[] marks = {10,20,30,40};
        System.out.println(marks[2]);  
        marks[3] = 50;
        System.out.println(Arrays.toString(marks)); 
        System.out.println(marks.length);
        System.out.println(Arrays.asList(marks).contains(100)); 
        System.out.println(Arrays.copyOfRange(marks, 1, 3));
        int sum = 0;
        for (int i = 0; i < marks.length; i++) {
            sum += marks[i];
            System.out.println(marks[i] + " " + sum);   
        }       
    }
}
