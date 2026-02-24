
void main() {

    int age = int.parse(stdin.readLineSync()!);

    if (age >= 18) {
        print("Eligible for voting");
    }
    else {
        print("Not eligible for voting");
    }

    for(int i=0; i<=5; i++){
        print(i);
    }

    List<String> names = ["rajat", "prince", "prashant"];
    print(names.length);
    for(int i = 0; i<names.length; i++){
         print(names[i]);
    }
    
}

