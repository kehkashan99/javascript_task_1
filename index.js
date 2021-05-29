var username = window.prompt("Enter your name");
var age = window.prompt("Enter your age");
var cnic = window.prompt("Enter your CNIC");
var len = cnic.length;

 if ( username === "aqsa" || username === "ayesha" ) {
      if (age >= 18) {
          if (cnic.length == 13) {
              alert("you are good to go")
          } else {
              alert("virus here")
          }
      } else {
          alert("invalid age")
      }
 } else {

     alert("invalid name");
     
    }
    
