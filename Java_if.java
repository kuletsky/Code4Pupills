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

        
        int n = 0;
        for (int k=5; k<=100; k++)
        {
            if (k%2==0 && k%5==0)
            {
                System.out.println(k);
                n++;
                if(n==3) 
                    break;
                
            }
        }

        boolean required = true;

        while (required) 
        {
            System.out.println(required);
            required = false;
        }

    }
}