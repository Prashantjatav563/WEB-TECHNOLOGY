// class Student{
//   String? name;
//   int? age;
//   int? marks;
//   String? city;
//   Student(this.name, this.age, this.marks, this.city);
//   display(){
//     print("$name $age $marks $city");
//   }
  
// }

// void main(){
//   Student s1=Student("Ram", 18, 50, "Ghaziabad");
//   Student s2=Student("Shyam", 23, 65, "Delhi");
//   Student s3=Student("Rajat", 22, 85, "Noida");
  
//   List<Student> students = [s1, s2, s3];

//   for (var p in students) {
//     print(p.display());
//   }
// //  print(s1.name);


//   return;
// }


import 'Person.dart';
void main(){
  Person p1=Person("Ramesh", 36);
  p1.setCity="Ghaziabad";
  print(p1.getCity);
}


