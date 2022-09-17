function getSeason(miesiac = "styczeń") {
    if ((miesiac == "grudzień")||(miesiac == "styczeń")||(miesiac == "luty")){
        console.log("zima");
        } else if 
          ((miesiac == "marzec")||(miesiac == "kwiecień")||(miesiac == "maj")){
            console.log("wiosna");
          } else if ((miesiac == "czerwiec")||(miesiac == "sierpień")){
            console.log("lato");
          } else if((miesiac == "październik")||(miesiac == "listopad")||(miesiac == "wrzesień")){
            console.log("jesień");
          } 
  }
  
  // getSeason("styczeń");
getSeason();