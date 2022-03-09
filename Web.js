
function formValidation() {
        var username = document.getElementById("userName").value;
        var email = document.getElementById("email_ID").value;
        var birthday = document.getElementById("birthDay").value;
        var password = document.getElementById("password").value;
        var verifyPassword = document.getElementById("password2").value;

        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;   
       
        
        function check(element) {
            var existing_names=[
                "jBillz",
                "PineapplesBelongOnPizza",
                "TheRock",
                "ZachKing",
                "Bezos",
                "loves",
                "TikTok",
                "Rihanna",
                "Microsoft",
                "ActionJackson"
            ]
            for(let i=0;i<existing_names.length;i++){
                if(element.toLowerCase()==existing_names[i].toLowerCase()){
                    return true;
                }
            }
         
        }
    
        
        if (username == "" || username == undefined) {
                alert("Please enter User Name");
                return false;
        }
        if(username.length>0){
            if(username.length<8){
               alert("username must be at least 8 characters long");
               return false;
            }
            if(check(username)){
                alert("The username "+username+ " is taken please enter a different username");
                return false;
            }
            if(username.length>25){
               alert("username must be at less than 26 characters long");
               return false;
            }
        }
        
        if (email == "" || email == undefined) {
                alert("Please enter Email");
                return false;
        }
        if(email.length>0){
            if(!(email.match(emailReg))){
                alert("Please enter a valid Email");
                return false;
            
            }
        }
        
        if (birthday == "" || birthday == undefined) {
                alert("Please enter Birthday");
                return false;
        }
        
        if (password == "" || password == undefined) {
                alert("Please enter Password");
                return false;
        }
        
        if (verifyPassword == "" || verifyPassword == undefined) {
                alert("Please enter Verify Password");
                return false;
        }               
        
        if (password != verifyPassword) {
                alert("Password and Verify Password should match");
                return false;
        }


        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
        localStorage.setItem("birthday",birthday);
        localStorage.setItem("password",password);
        if(document.getElementById("personal").checked){
            localStorage.setItem("accType",document.getElementById("personal").value);
         }
         if(document.getElementById("business").checked){
            localStorage.setItem("accType",document.getElementById("business").value);
         }
         if(document.getElementById("enterprise").checked){
            localStorage.setItem("accType",document.getElementById("enterprise").value);
         }
         if(document.getElementById("other").checked){
            localStorage.setItem("accType",document.getElementById("other").value);
         }

        
        return true;
}