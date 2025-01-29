           alert("Problem 2");
      
           var firstName = prompt("Enter first name: ", "0");
           var lastName = prompt("Enter last name: ", "0");
           var birthYear = prompt("Enter birth year: ", "0");
           
           var currentYear = 2025;
           var age = 2025 - birthYear;
           
           document.getElementById("demo").innerHTML = "Hi "+firstName+" "+lastName+"! How does it feel to be "+age+" "+"years old?";

