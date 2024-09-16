let userName = document.querySelector('#username');
let userPassword = document.querySelector('#password');
let subBtn = document.querySelector('.login-button');
let resson;
let access = () => {
    
        if (!userName.value.length && !userPassword.value.length) {
             resson = ` both is not  set`
            }
        else {
            if(userName.value.length < 10){
                resson = `The USERNAME should be aleast 10 char`
          
            }
            if(userPassword.value.length < 10){
                resson = `The PASSWORD should be aleast 10 char`
                       }
            }

        if (resson) {
            alert(`ACCESS DENEID : ${resson}!`);
        } else {
            alert("ACCESS GRANTED");
        }
        
        
    }  
         
    


subBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents the form from submitting
    access();
});