public class Person {
    // Instance variables
    private int age = 25;
    private String firstName;
    private String lastName;

    // Constructor
    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Getter for location
    public String getLocation() {
        return "Canada";
    }

    // Method to return full name
    public void fullName() {
        System.out.println(this.firstName + " " + this.lastName);
    }

    // Main method to run the code
    public static void main(String[] args) {
        Person person = new Person("Tim", "Joseph");
        Person person1 = new Person("Chris", "Jones");

        System.out.println(person.getAge());       // Outputs: 25
        System.out.println(person.getLocation());  // Outputs: Canada
        person.fullName();                         // Outputs: Tim Joseph
        person1.fullName();                        // Outputs: Chris Jones
    }
}

