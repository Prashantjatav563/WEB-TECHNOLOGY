//building a Simple Calculator: Dart command-line app implementing basic arithmetic operations (+, -, *, /) using functions and switch statements.
import 'dart:io';

void main() {

  print("Enter first number:");
  int num1 = int.parse(stdin.readLineSync()!);
  print("Enter operator (+, -, *, /):");
  String op = stdin.readLineSync()!;
  print("Enter second number:");
  int num2 = int.parse(stdin.readLineSync()!);

  switch (op) {
    case '+':
      print("Result: ${add(num1, num2)}");
      break;
    case '-':
      print("Result: ${subtract(num1, num2)}");
      break;
    case '*':
      print("Result: ${multiply(num1, num2)}");
      break;
    case '/':
      if (num2 != 0) {
        print("Result: ${divide(num1, num2)}");
      } else {
        print("Cannot divide by zero");
      }
      break;
    default:
      print("Invalid Operator");
  }

}
int add(int a, int b) => a + b;
int subtract(int a, int b) => a - b;
int multiply(int a, int b) => a * b;
double divide(int a, int b) => a / b;