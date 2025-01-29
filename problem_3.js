       alert("Problem 3");
	   
	   let shareInfo = "Do you agree to share your personal information?";
           if (confirm(shareInfo)==true)
           {
             alert("Name: "+nickname+"\nHeight: "+foot+"'"+inch+"''"+"\nWeight: "+pounds);
           }
           else
           {
             console.log("User does not wish to share their information.");
           }