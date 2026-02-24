

function validateForm() {

    let firstname = document.forms["myForm"]["firstname"].value.trim();
    let email = document.forms["myForm"]["email"].value.trim();
        let lastname = document.forms["myForm"]["lastname"].value.trim();


    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(firstname)) {
        alert("first is not valid. Only letters, spaces, and hyphens allowed.");
        return false;
    }
    const lastnameRegex = /^[a-zA-Z\s-]+$/;
    if (!lastnameRegex.test(lastname)) {
        alert("last name is not valid. Only letters, spaces, and hyphens allowed.");
        return false;
    }

    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Email address is not valid.");
        return false;
    }
    (document.getElementById("myAudio")).play();
          
    var x = document.getElementById("popup");


    alert("Form is valid!");
    return true;
  }





    

