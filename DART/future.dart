void main(){
  fetchData();
}

// void fetchData() async {
//   print("Data is Loading");
//   await Future.delayed(Duration(seconds: 5));
//   print("Data Loaded Successfully");
// }

// void fetchData() {
//   print("Data is Loading");
//   Future.delayed(Duration(seconds: 5)).then((abc) {
//     print("Data is displayed after 5 second");
//   });
//   print("Doing some other operations");
// }

void fetchData() async {
  print("Data is Loading");
  String data = await getData();

  print(data);
  print("Doing some other operations");
}
Future<String> getData() async {
  await Future.delayed(Duration(seconds: 5));
  return "Data is Loaded";
}