let nav = document.getElementById('nav')
let button = document.querySelector('.toggle')
let ul = document.querySelector("#ul")
let lis = document.querySelectorAll("li")


button.addEventListener("click", () => {

    nav.classList.toggle("active");

})

// clibler les élements li 
let tabLi = []
lis.forEach((li) => {
    tabLi.push(li)

    li.addEventListener("click", function(e) {
        tabLi.find((li) => {
            li.classList.remove("lidesign")
            nav.classList.remove("nav")
        })
        e.preventDefault()
        li.classList.add("lidesign")
        nav.classList.add("nav")

    })


})