

//mvcmodel\frontend.js
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
    const credits= document.getElementById('credits').value.trim();
    const formData = new FormData();
    console.log(formData);
    formData.append('name', name);
    formData.append('email',email);
    formData.append('semester',semester);
    formData.append('member',member);
    formData.append('credits',credits);
    formData.append('rollno',rollno);
    console.log("Form upload called");
    if(image){
    formData.append('image',image);
        console.log("Selected image is:",image);
    }
    const response = fetch('/users', {
        method:'POST',
        body: formData,
    }).then(response=>response.text()).then(data=>alert(data)).then(()=>getUsers()).catch(err => alert("failed to upload",err));
    
});
async function getUsers()
{
    const users = document.getElementById("users");
    users.innerHTML="";
    const response = await fetch('/users');
    const items= await response.json();
    items.forEach(item =>
    {
        const n = document.createElement("li");
        n.innerHTML= `${item.name}</br> ${item.email} </br> ${item.rollno} </br> ${item.member} <br> ${item.semester}</br> ${item.credits}`;
        const r = document.createElement("img");
        r.src=`/user/image/${item._id}`;
        users.appendChild(n);
        users.appendChild(r);
    });
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
body:formData,
}).then(response=>response.text()).then(data=>alert(data))
.then(()=>getEvents()).catch(error=> alert("Failed to upload events"));
});
async function getEvents(){
    const events = document.getElementById('events');
    events.innerHTML="";
    const response = await fetch('/events');
    const items= await response.json();
    items.forEach(item =>{
        const event= document.createElement("li");
        event.innerHTML=`${item.name}</br> ${item.venue} </br> ${item.date} </br> ${item.time} </br> ${item.guest} </br> ${item.description} </br> ${item.seats}</br>`;
        const img = document.createElement('img');
        img.src=`/event/image/${item._id}`;
        events.appendChild(event);
        events.appendChild(img);
    });
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
    body:formData,
   }).then(response =>response.text()).then(data=> alert(data))
   .catch(err=>alert("Failed to upload merch",err));

});
async function getMerchs()
{
    const merchs=document.getElementById("merchs");
    merchs.innerHTML="";
    const response = await fetch('/merchs');
    const items = await response.json();//must be awaited otherwise it sends a promise object rather tahn an array
        items.forEach(item=> {
        const merch = document.createElement("li");
        merch.innerHTML=`${item.name}</br>${item.price} </br> ${item.description}`;
        const img = document.createElement("img");
        img.src=`/merch/image/${item._id}`;
        console.log("Image source is",img.src);
        merchs.appendChild(merch);
        merchs.appendChild(img);
    }

);

}