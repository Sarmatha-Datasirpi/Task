let firstname:string="Vasanth";         //string types
console.log(firstname);

var phno:number = 9876543232;        //numeric type
console.log(phno);

const x:boolean = false;             //boolean type
console.log(x);

var list:number[] = [6,3,8,6,8];      //arrays
console.log(list);

var tuple:[number,string]=[1,'Shara']  //tuples
console.log(tuple);

var tup=[1,3,"Sara"]
tup=[]
console.log(tup);

var tupl=["joe","sam","priya"]
console.log(tupl[0]);
tupl[1]="son";
console.log(tupl[1]);
console.log(tupl);

enum direction{    //enums that represent group of constants two types of enums string,number
    east =0,
    west,
    north,
    south
}
console.log(direction);
 
let add =(a:number,b:number)=>{   //function using strict datatypes.
    return a+b;
}
console.log(add(5,10))



interface user {                //user-defined type interface 
    name: string;
    age: number;
    email: string;
  }
  

  const user1: user = {
    name: "Sharmatha",
    age: 22,
    email: "sara.dream@example.com",
  };
  console.log(user1);

  class Details {                          //user-defined type class
    name: string;
    age: number;
    email: string;
  
    constructor(name: string, age: number, email: string) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  }
  
  const user2 = new Details("Priya", 23, "priya.evergreen@example.com");
  console.log(user2);


  type Users = {                         //user-defined type alias
    name: string;
    age: number;
    email: string;
  };
  
  const user3: Users = {
    name: "Shalu",
    age: 22,
    email: "shaluk@example.com",
  };
  console.log(user3);
  









