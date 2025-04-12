//mvcmodel\views\login.js
const buttonsub = document.getElementById("buttonsub");
buttonsub.addEventListener('click',async function(e){

    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password= document.getElementById("password").value.trim();
    console.log("Access message sent", password,email);
    const response =await fetch('/login',{
        method:'POST',headers:{
            "Content-Type":"application/json",
        },body:JSON.stringify({
            email:email,
            password:password,
        }),
    });
    console.log("Access message sent", password,email);
    
    const data = await response.json();
    if(data.token)
    {
        localStorage.setItem('token',data.token);
        console.log("token is :",data.token);
        const signal=document.createElement("h1");
    
        signal.innerHTML="You have Successfully logged in";
        const responseBody = document.getElementById("response");
        responseBody.appendChild(signal);
         setTimeout(()=>{
           window.location.href='/';
         },1000);
    }    
    else
     alert("Login failed");
});