function BMI(weight,height){
    if (weight/height**2 < 18.5){
      console.log("niedowaga");
    } else if (weight/height**2 >= 25){
      console.log("nadwaga")
    } else {
      console.log("normalna")
    }
  }
  
  
  
  BMI(65,1.80);