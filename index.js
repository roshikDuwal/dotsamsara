


//------------------------------------
//creating responsive navbar tabbed component
//============================================
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerELem = document.querySelector(".header");

const nav_link=document.querySelector(".navbar-link");
const about_link=document.querySelector(".about-link");
const service_link=document.querySelector(".service-link");
const contact_link=document.querySelector(".contact-link");
const client_link=document.querySelector(".client-link");


mobile_nav.addEventListener("click",()=>{
    headerELem.classList.toggle('active');
})

nav_link.addEventListener("click",()=>{
    headerELem.classList.remove('active')
})
about_link.addEventListener("click",()=>{
    headerELem.classList.remove('active')
})
service_link.addEventListener("click",()=>{
    headerELem.classList.remove('active')
})
contact_link.addEventListener("click",()=>{
    headerELem.classList.remove('active')
})

client_link.addEventListener("click",()=>{
    headerELem.classList.remove('active')
})




//------------------------------------
//creating sticky navbar tabbed component
//============================================
const heroSection= document.querySelector(".section-hero")
const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    !ent.isIntersecting
    ?document.body.classList.add("sticky")
    :document.body.classList.remove("sticky")

},{
    root:null,
    threshold:0,
})

observer.observe(heroSection);


