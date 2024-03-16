var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupaddbutton = document.getElementById("add-popupbutton")

popupaddbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})
var cancelpopup = document.getElementById("cancel-popuop")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})


var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var addbooktitle = document.getElementById("book-title-input")
var addbookauthor = document.getElementById("book-author-input")
var addtextarea = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = ` <h2>${addbooktitle.value}</h2>
    <h4>${addbookauthor.value}</h4>
    <p>${addtextarea.value}</p>
    <button onclick="deletebook(event)">Delete</button>
    `
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// function deletebook(){
//     event.target.parentElement.remove()
// }