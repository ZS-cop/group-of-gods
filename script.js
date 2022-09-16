let nav = document.getElementById("nav");
let cross = document.getElementById("cross");
let menu = document.getElementById("menu");

nav.addEventListener("click" , ()=>{
         cross.classList.remove("hidden");
         menu.classList.remove("hidden");
         console.log("hello");
});
cross.addEventListener("click" , ()=>{
         cross.classList.add("hidden");
         menu.classList.add("hidden");
         console.log("hello");
});