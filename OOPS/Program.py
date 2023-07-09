class Greeting:
    def greet(self, name=None):
        if name is None:
            print("Hello")
        else:
            print("Hello", name)
greeting = Greeting()
greeting.greet() 
greeting.greet("Sansa")


class Store:                              #public getter and setter methods to the Store class so its variables can be accessed by . other classes
    def __init__(self, name, address):
        self._name = name
        self._address = address
    def get_name(self):
        return self._name
    def set_name(self, name):
        self._name = name
    def get_address(self):
        return self._address
    def set_address(self, address):
        self._address = address
store = Store("DataSirpi Company", "123 Main St")
print("Store Name:", store.get_name())
print("Store Address:", store.get_address())
store.set_name("XYZ Store")
store.set_address("456 Elm St")
print("New Store Name:", store.get_name())
print("New Store Address:", store.get_address())



class Animal:        #Multilevel inheritance access from the super parent class
    def eat(self):
        print("cat is eating...")

class cat(Animal):
    def walk(self):
        print("cat is waliking...")

class dog(cat):
    def sleep(self):
        print("dog is sleeping...")
Dog = dog()
Dog.eat()
Dog.walk()
Dog.sleep()


class Account:
    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance

    def credit(self, amount):
        self.balance += amount

    def debit(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient balance")
        self.balance -= amount

    def transferTo(self, another_account, amount):
        self.debit(amount)
        another_account.credit(amount)
account1 = Account("123456")
account2 = Account("789012", balance=100)
account1.credit(500)
account1.debit(100)
account2.transferTo(account1, 50)
print("Account 1 balance:", account1.balance)
print("Account 2 balance:", account2.balance)




from abc import ABC, abstractmethod   #abstract parent class with abstract methods and create a child class that extends parent class.
class Animal(ABC):
    @abstractmethod    
    def speak(self):
        pass
class Dog(Animal):
    def speak(self):
        return "Woof!"
class Cat(Animal):
    def speak(self):
        return "Meow!"
dog = Dog()
cat = Cat()
print(dog.speak())
print(cat.speak()) 





