class Greeting {
    public void greet() {
        System.out.println("Hello");
    }
    
    public void greet(String name) {
        System.out.println("Hello " + name);
    }
}
public class Sample {
    public static void main(String[] args) {
        Greeting greeting = new Greeting();
        
        greeting.greet();           // Output: Hello
        
        greeting.greet("Sansa");    // Output: Hello Sansa
    }
}
