public class Java_if {
    public static void main(String[] args) {
        int i = 0;
        while (i > 10) {
            i++;
            System.out.println("I am inside loop - " + i);
        }

        do {
            i++;
        } while (i > 10);
        System.out.println(i);


        for (int k=5; k<=10; k++)
        {
         System.out.println(k);

        }

        boolean required = true;

        while (required) 
        {
            System.out.println(required);
            required = false;
        }

    }
}