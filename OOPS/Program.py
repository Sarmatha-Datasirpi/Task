class Greeting:
    def greet(self, name=None):
        if name is None:
            print("Hello")
        else:
            print("Hello", name)
g1 = Greeting()
g1.greet() 
g1.greet("Sansa")


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
store = Store("Velavan Store", "123 Main Road")
print("Store Name:", store.get_name())
print("Store Address:", store.get_address())
store.set_name("Hyper Market Store")
store.set_address("7th floor")
print("New Store Name:", store.get_name())
print("New Store Address:", store.get_address())



class Animal:        #Multilevel inheritance access from the super parent class
    def eat(self):
        print("Cow and Goat are eating...")

class Cow(Animal):
    def walk(self):
        print("Cow is walking...")

class Goat(Cow):
    def sleep(self):
        print("Goat is sleeping...")
goat = Goat()
goat.eat()
goat.walk()
goat.sleep()


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
account1 = Account("9836364")
account2 = Account("8324612", balance=100)
account1.credit(1000)
account1.debit(500)
account2.transferTo(account1, 50)
print("Account 1 balance:", account1.balance)
print("Account 2 balance:", account2.balance)




from abc import ABC, abstractmethod   #abstract parent class with abstract methods and create a child class that extends parent class.
class Birds(ABC):
    @abstractmethod    
    def speak(self):
        pass
class Parrot(Birds):
    def speak(self):
        return "KIKI!"
class Dove(Birds):
    def speak(self):
        return "KUNU!"
p1 = Parrot()
d1= Dove()
print(p1.speak())
print(d1.speak()) 





