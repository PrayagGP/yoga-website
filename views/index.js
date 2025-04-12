

//mvcmodel\frontend.js
const token = localStorage.getItem('token');
console.log('token is',token);
getUsers();
const uploadForm = document.getElementById("uploadForm");
uploadForm.addEventListener('submit',function(e)
{
    e.preventDefault();
    const  image=document.getElementById('image').files[0];
    const name = document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const rollno= document.getElementById('rollno').value.trim();
    const semester=document.getElementById('semester').value.trim();
    const member= document.getElementById('member').value.trim();
    const password= document.getElementById('password').value.trim();
    const formData = new FormData();
    console.log(formData);
    formData.append('name', name);
    formData.append('email',email);
    formData.append('semester',semester);
    formData.append('member',member);
    formData.append('password',password);
    formData.append('rollno',rollno);
    console.log("Form upload called");
    if(image){
    formData.append('image',image);
        console.log("Selected image is:",image);
    }
    const response = fetch('/users', {
        method:'POST',
        body: formData,
        headers:{
            "Authorization":`Bearer ${token}`
        },
    }).then(response=>response.text()).then(data=>alert(data)).then(()=>getUsers()).catch(err => alert("failed to upload",err));
    
});
async function getUsers()
{
    const users = document.getElementById("users");
    users.innerHTML="";
    const response = await fetch('/users',{ method:'GET',
        headers:{
            "Authorization":`Bearer ${token}`
        }});
    const items= await response.json();
    items.forEach(item =>
    {
        const n = document.createElement("li");
        n.innerHTML= `${item.name}</br> ${item.email} </br> ${item.rollno} </br> ${item.member} <br> ${item.semester}</br> ${item.password}`;
        const r = document.createElement("img");
        const del =document.createElement("button");
        del.innerHTML="Delete";
        del.onclick=()=>{
            console.log("Deletion sent ",item._id);
            deleteUser(item._id);
        };
        r.src=`/user/image/${item._id}`;
        users.appendChild(n);
        users.appendChild(r);
        users.appendChild(del);
    });
}

async function deleteUser(id){
    const response = await fetch(`/users/${id}`, {
        method:'DELETE',headers:{
            "Authorization":`Bearer ${token}`,
        }
    });
    //const data = await response.json();
    if(response.ok){
        console.log("Deletion successful");
        alert("Deletion successful");
    } 
    else
      {
        console.log("Unable to delete " ,response);
        alert("Unable to delete user");
      }
      const message= await response.text();
      console.log("MEssage for delete is",message);
      getUsers();
}
getEvents();
const uploadEvent=document.getElementById("uploadEvent");
uploadEvent.addEventListener('submit', async function(e){
e.preventDefault();
const image = document.getElementById('imageEvent').files[0];
const name  = document.getElementById('nameEvent').value.trim();
const venue = document.getElementById('venueEvent').value.trim();
const guest = document.getElementById('guestEvent').value.trim();
const date  = document.getElementById('dateEvent').value.trim();
const seats = document.getElementById('seatsEvent').value.trim();
const time  = document.getElementById('timeEvent').value.trim();
const description=document.getElementById('descriptionEvent').value.trim();
const formData=new FormData();
formData.append('name',name);
formData.append('venue',venue);
formData.append('date',date);
formData.append('guest',guest);
formData.append('time',time);
formData.append('seats',seats);
formData.append('description',description);
if(image){
formData.append('image',image);
console.log("Selected image is:",image);
}
console.log("Form Data" ,formData);
const response= await fetch('/events',{
method:'POST',
body:formData,headers:{"Authorization":`Bearer ${token}`},
}).then(response=>response.text()).then(data=>alert(data))
.then(()=>getEvents()).catch(error=> alert("Failed to upload events"));
});
async function getEvents(){
    const events = document.getElementById('events');
    events.innerHTML="";
    const response = await fetch('/events',{headers:{"Authorization":`Bearer ${token}`}});
    const items= await response.json();
    items.forEach(item =>{
        const event= document.createElement("li");
        event.innerHTML=`${item.name}</br> ${item.venue} </br> ${item.date} </br> ${item.time} </br> ${item.guest} </br> ${item.description} </br> ${item.seats}</br>`;
        const img = document.createElement('img');
        const del= document.createElement("button");
        del.innerHTML="Delete";
        del.onclick=()=>{
            console.log("Deletion sent ",item._id);
            deleteEvent(item._id);
        }
        img.src=`/event/image/${item._id}`;
        events.appendChild(event);
        events.appendChild(img);
        events.appendChild(del);
    });
}
async function deleteEvent(id){
    const response = await fetch(`/events/${id}`,{
        method:'DELETE' , headers:{
            "Authorization": `Bearer ${token}`,
        }
    });
    if(response.ok)
        alert("Deleted event");
    else
        alert("failed to update");
    getEvents();
}
getMerchs();
const uploadMerch = document.getElementById("uploadMerch");
uploadMerch.addEventListener('submit', async function(e){
    e.preventDefault();
    const image = document.getElementById("imageMerch").files[0];
    const name = document.getElementById("nameMerch").value.trim();
    const price= document.getElementById("priceMerch").value.trim();
    const description = document.getElementById("descriptionMerch").value.trim();
    const formData= new FormData();
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    if(image){
        formData.append('image',image);
        console.log("Selected image is :",image);
    }
   await fetch('/merchs',{
    method:'POST',
    body:formData,headers:{"Authorization":`Bearer ${token}`},
   }).then(response =>response.text()).then(data=> alert(data))
   .catch(err=>alert("Failed to upload merch",err));

});
async function getMerchs()
{
    const merchs=document.getElementById("merchs");
    merchs.innerHTML="";
    const response = await fetch('/merchs',{headers:{"Authorization" : `Bearer ${token}`}});
    const items = await response.json();//must be awaited otherwise it sends a promise object rather tahn an array
        items.forEach(item=> {
        const merch = document.createElement("li");
        merch.innerHTML=`${item.name}</br>${item.price} </br> ${item.description}`;
        const img = document.createElement("img");
        const del = document.createElement("button");
        del.innerHTML="Delete";
        del.onclick=()=>{
            console.log("Deletion sent ",item._id);
            deleteMerch(item._id);
        }
        img.src=`/merch/image/${item._id}`;
        console.log("Image source is",img.src);
        merchs.appendChild(merch);
        merchs.appendChild(img);
        merchs.appendChild(del);
    });
}
async function deleteMerch(id){
    const response = await fetch(`/merchs/${id}`,{
        method:'DELETE' , headers : {
            "Authorization": `Bearer ${token}`
        }
    });
    if(response.ok)
        alert("deletion of merch successful");
    else
        alert("Deletion of merch failed");
    getMerchs();
}
const logout = document.getElementById("logout");
logout.addEventListener('click',()=>{
    localStorage.removeItem('token');
    window.location.href='/login';
});