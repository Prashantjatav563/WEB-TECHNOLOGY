class Person{
  String? name;
  int? age;
  String? _city;
  int? _balance;
  Person(this.name, this.age);
  set setCity(String city){
    _city=city;
  }
  get getCity{
    return _city;
  }
  set setBalance(int balance){
    if(balance<5000){
      print("Insufficient amout");
    }
    else{
      _balance=balance;
    }
  }
  get getBalance{
      return _balance;
  }
  
  display(){
    print("$name $age");
  }
}

void main(){
  Person p1=Person("Pranjal", 20);
  p1.display();
}