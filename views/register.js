//mvcmodel\views\register.js
const signUp=document.getElementById("signUp");
signUp.addEventListener('submit',async function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const rollno=document.getElementById("rollno").value.trim();
    const password=document.getElementById("password").value.trim();
    const formData= new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('rollno',rollno);
    formData.append('password',password);
    try{
    const response= await fetch('http://localhost:3000/register',{method:'POST',
        body:formData,});//.then(response =>response.text()).then(data=>alert(data)).catch(err=> console.log("error",err));
        
        const data = await response.json();
        if(data.ok){
            alert("USer created successfully");
            window.location.href='/login';
        }
          else{
              console.log("Failed to create admin");
          }
        }catch(err){
            console.error("Error duting registration",err);
        }
});