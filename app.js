
let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}`

let scrollConatiner = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollConatiner.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollConatiner.scrollLeft += evt.deltaY;
    scrollConatiner.style.behavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
    scrollConatiner.style.behavior = "smoot";
    scrollConatiner.scrollLeft += 900;
})
backBtn.addEventListener("click", ()=>{
    scrollConatiner.style.behavior = "smoot";
    scrollConatiner.scrollLeft -= 900;
})






