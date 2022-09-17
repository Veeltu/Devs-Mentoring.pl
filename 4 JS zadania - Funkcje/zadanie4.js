function fizz_buzz(liczba){
    if ((liczba % 3 == 0) && (liczba % 5 == 0)){
      console.log("FizzBuzz");
    } else if (liczba % 5 == 0){
      console.log("Buzz");
    } else if (liczba % 3 == 0){
      console.log("Fizz");
    } else {
      console.log(liczba);
    }
  }
  
  fizz_buzz(3);