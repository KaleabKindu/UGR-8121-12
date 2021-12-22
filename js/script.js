
const menuicon=document.querySelector('.hamburger_menu');
const mobile_navbar=document.querySelector('.mobile_navbar')
 menuicon.addEventListener("click", () => {
     menuicon.classList.toggle("change");
     let state=window.getComputedStyle(mobile_navbar);
     if (state.display == "none"){
        mobile_navbar.style.display="block";
     }
     else if (state.display == "block"){
        mobile_navbar.style.display="none";
     }
 })


