const btn = document.querySelector(".btn"); 
const cbtn = document.querySelector(".close");
let open = 0;

// Listen for click event 
btn.onclick = function (c) { 
    if(open = 0){
    // Create span element 
        let ripple = document.createElement("span"); 

    // Add ripple class to span 
        ripple.classList.add("ripple"); 

    // Add span to the button 
        this.appendChild(ripple); 

    // Get position of X 
        let x = e.clientX - e.target.offsetLeft; 

    // Get position of Y 
        let y = e.clientY - e.target.offsetTop; 

    // Position the span element 
        ripple.style.left = `${x}px`; 
        ripple.style.top = `${y}px`; 

        let open = 1;
    }
    else {
        return;
    };
}; 
close.onclick = function (c) {
    if(open = 1){
        ripple.remove
    }
}