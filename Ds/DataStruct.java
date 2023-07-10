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
        sum+=a[i];
    }
    System.out.println("Sum of your array : "+ sum);
    LinkedList<Integer> list=new LinkedList<>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    Stack<Integer> stack=new Stack<>();
    for(i=4;i>=0;i--)
    {
        stack.push(list.get(i));
    }
    Queue<Integer> queue=new LinkedList<>();
    for(i=0;i<list.size();i+=2)
    {
        queue.add(list.get(i));
    
    }
    Map<Integer,Integer> map=new HashMap<>();
    for(i=1;i<5;i+=2)
    {
        map.put(i,list.get(i));
    }
    System.out.println("Linked List : " + list);
    System.out.println("Stack : " + stack);
    System.out.println("Queue : " + queue);
    System.out.println("Map : " + map);
    System.out.println();
    obj.close();
}
}


    

