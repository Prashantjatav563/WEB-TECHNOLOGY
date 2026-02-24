// create an electricity consumption program on the basic of followinng criteria:
// units range | 0-100, 101-200, 201-300, above 300
// rate per units(in rs) | 1.5, 2.5, 4.5, 5.0

import 'dart:io';

void main() {
  print("Enter electricity units:");
  int units = int.parse(stdin.readLineSync()!);

  double bill = 0;

  if (units <= 100) {
    bill = units * 1.5;
  } 
  else if (units <= 200) {
    bill = (100 * 1.5) +
           ((units - 100) * 2.5);
  } 
  else if (units <= 300) {
    bill = (100 * 1.5) +
           (100 * 2.5) +
           ((units - 200) * 4.5);
  } 
  else {
    bill = (100 * 1.5) +
           (100 * 2.5) +
           (100 * 4.5) +
           ((units - 300) * 5.0);
  }

  print("Total electricity bill = ₹$bill");
}
