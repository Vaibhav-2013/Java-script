function validate(e){
e.preventdefault();
const email=document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const  age = document.getElementById("age").value;
    const msgBox = document.getElementById("message").value;
    let message='';
    if (email===''){
        message="please enter an email";
        msgBox.style.color="red";
    }
    else if(password===''){
        message = "please enter an password";
        msgBox.style.color = "red";
    }
    else if(age===''){
        message = "please enter an age";
        msgBox.style.color = "red";
    }
    else{
    message="Login succesful"
        msgBox.style.color = "green"
        
}
msgBox.innerHTML=message;}
document.getElementById("loginform").onsumbit=validate;
document.getElementById("email").oninput = () => validate({ preventDefault: () => { } });
document.getElementById("password").oninput = () => validate({ preventDefault: () => { } });
document.getElementById("age").oninput = () => validate({ preventDefault: () => { } });
