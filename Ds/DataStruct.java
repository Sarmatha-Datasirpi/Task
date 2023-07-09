package Ds;
import java.util.*;
public class DataStruct {

public static void main(String args[])
{
    int a[]=new int[5];
    int i,sum=0;
    Scanner obj=new Scanner(System.in);
    System.out.println("Enter your Array element: ");
    for(i=0;i<5;i++)
    {
        a[i]=obj.nextInt();

    }
    for(i=0;i<5;i++)
    {
        sum+=a[i];
    }
    System.out.println("Sum of your array : "+ sum);
    LinkedList<Integer> list1=new LinkedList<>();
    list1.add(1);
    list1.add(2);
    list1.add(3);
    list1.add(4);
    list1.add(5);
    Stack<Integer> stack2=new Stack<>();
    for(i=4;i>=0;i--)
    {
        stack2.push(list1.get(i));
    }
    Queue<Integer> queue1=new LinkedList<>();
    for(i=0;i<list1.size();i+=2)
    {
        queue1.add(list1.get(i));
    
    }
    Map<Integer,Integer> map=new HashMap<>();
    for(i=1;i<5;i+=2)
    {
        map.put(i,list1.get(i));
    }
    System.out.println("Linked List : " + list1);
    System.out.println("Stack : " + stack2);
    System.out.println("Queue : " + queue1);
    System.out.println("Map : " + map);
    System.out.println();
    obj.close();
}
}

    

