button = document.getElementsByTagName("button")[0]
head = document.getElementsByClassName("head")
span = document.getElementsByTagName("span")
links = document.getElementsByClassName("links")[0].children

button.addEventListener("mouseenter",function() {
    button.style.backgroundColor = "black"
})

button.addEventListener("mouseleave",function() {
    button.style.backgroundColor = "orangered"
})

for (let i=0;i<5;i++) {
    links[i].onmouseenter = function() {
        links[i].style.color = "orangered"
    }
    links[i].onmouseleave = function() {
        links[i].style.color = "black"
    }
}

for (let i = 0; i < 3 ; i++) {
    head[i].onmouseenter = function() {
        head[i].style.color = "orange"
    }
    head[i].onmouseleave = function() {
        head[i].style.color = "white"
    }    
}

for (let i = 2; i < 5 ; i++) {
    span[i].onmouseenter = function() {
        span[i].style.color = "orangered"
    }
    span[i].onmouseleave = function() {
        span[i].style.color = "black"
    }    
}