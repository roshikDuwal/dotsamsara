


//------------------------------------
//creating responsive navbar tabbed component
//============================================
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerELem = document.querySelector(".header");


mobile_nav.addEventListener("click",()=>{
    headerELem.classList.toggle('active');
    console.log("Hello");
})




//------------------------------------
//creating sticky navbar tabbed component
//============================================
const heroSection= document.querySelector(".section-hero")
const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    console.log(ent);
    console.log(ent.isIntersecting);
    !ent.isIntersecting
    ?document.body.classList.add("sticky")
    :document.body.classList.remove("sticky")

},{
    root:null,
    threshold:0,
})

observer.observe(heroSection);


