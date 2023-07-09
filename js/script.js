// function cardHoverBg(){
//     let cardHover = document.querySelector(".card-hover")
//     cardHover.classList.toggle("bg-primary", "text-light")
// }

// function cardHoverBg2(){
//     let cardHover = document.querySelector(".card-hover")
//     cardHover.classList.toggle("bg-light", "text-dark")
// }


let cardHover = document.querySelector(".card-hover")
let isEvent = true

function handleMouseOver(){
    cardHover.classList.add("bg-primary", "text-light");
}

function toggleListener(){
    if(!isEvent){
        isEvent = true
        cardHover.addEventListener('mouseover', handleMouseOver);
    }else if(isEvent){
        isEvent = false
        cardHover.removeEventListener('mouseover', handleMouseOver);
    }
}

toggleListener()