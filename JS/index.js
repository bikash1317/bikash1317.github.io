const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome To My Website." , "My Name Is Bikash Kumar Dash.","To Know More About Me Go To About Me." ,"To See Awesome Projects Go To Projects Section." ,"To Know See My Coding Experience Visit The Blog Section." ,"You Can Contact Me Using Contact Me Section."];
const typingDelay = 10;
const erasingDelay = 5 ;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type(){
    if(charIndex<textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
        console.log("a");
    }
    else{
        cursorSpan.classList.remove("typing");
        setTimeout(erase ,newTextDelay);
    }
}
function erase(){
    if(charIndex > 0){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent =textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex --;
        setTimeout(erase ,erasingDelay);
    }
    else{
        cursorSpan.classList.remove("typing");
         textArrayIndex ++;
         if(textArrayIndex >= textArray.length )textArrayIndex = 0;
         setTimeout(type ,typingDelay);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    if (textArray.length) setTimeout(type,newTextDelay);
});