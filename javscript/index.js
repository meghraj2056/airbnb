const loc= document.querySelector('.location')
const nav=  document.querySelector('.on-click-text')
const body= document.querySelector('body')

loc.addEventListener("click", () => {
    if(nav.style.display=== "none"){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
        
});
