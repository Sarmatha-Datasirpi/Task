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
    LinkedList<Integer> lst=new LinkedList<>();
    lst.add(1);
    lst.add(2);
    lst.add(3);
    lst.add(4);
    lst.add(5);
    Stack<Integer> stk=new Stack<>();
    for(i=4;i>=0;i--)
    {
        stk.push(lst.get(i));
    }
    Queue<Integer> que=new LinkedList<>();
    for(i=0;i<lst.size();i+=2)
    {
        que.add(lst.get(i));
    
    }
    Map<Integer,Integer> map=new HashMap<>();
    for(i=1;i<5;i+=2)
    {
        map.put(i,lst.get(i));
    }
    System.out.println("Linked List : " + lst);
    System.out.println("Stack : " + stk);
    System.out.println("Queue : " + que);
    System.out.println("Map : " + map);
    System.out.println();
    obj.close();
}
}

    

