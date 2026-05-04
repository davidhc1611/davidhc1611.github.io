function reveal(){
const elementos = document.querySelectorAll(".reveal");

elementos.forEach(el=>{
const top = el.getBoundingClientRect().top;
const visible = 100;

if(top < window.innerHeight - visible){
el.classList.add("active");
}else{
el.classList.remove("active");
}
});
}

window.addEventListener("scroll", reveal);