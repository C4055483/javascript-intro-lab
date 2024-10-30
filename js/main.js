console.info("Hello JS");
document.getElementById ("myHeading").innerHTML = "Ryan Parsons";
document.querySelector("nav>ul>li").setAttribute("class","currentPage")

document
.querySelector("nav ul li a")  /*selects the location*/
.setAttribute("href", "https://google.co.uk") /*precise location, followed by what you're changing it to*/

let colourButtons = document.querySelectorAll(".colPicker") /*selecting all in the class*/
console.dir(colourButtons); /* creates a node list in the console on inspect */

for(let i = 0; i < colourButtons.length; i++)
{
    colourButtons[i].style.backgroundColor = "blue";
}

document.getElementById("myTestBtn").addEventListener("click", function (){
    console.info("hi I was clicked");
});

let redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function(){ 
    document.body.setAttribute("class","redBack");
})
/* now do the same for the other buttons*/

let greenBtn = document.querySelector(".green")
greenBtn.addEventListener("click", function(){ 
    document.body.setAttribute("class","greenBack");
})

let blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function(){ 
    document.body.setAttribute("class","blueBack");
})

let defaultBtn = document.querySelector(".reset")
defaultBtn.addEventListener("click", function(){ 
    document.body.removeAttribute("class");
})