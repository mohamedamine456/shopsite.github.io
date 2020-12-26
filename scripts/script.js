let menuBtn = document.querySelector(".menu-icon span");
let searchBtn = document.querySelector(".search-icon");
let cancelBtn = document.querySelector(".cancel-icon");
let items = document.querySelector(".nav-items");
let form = document.querySelector("form");

menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

let products = [
    {
        name : 'Nikon d3300',
        tag : 'Nikond3300',
        price : 500,
        incart : 0 
    },
    {
        name : 'Pentax 575',
        tag : 'pentax575',
        price : 300,
        incart : 0 
    }
    ,
    {
        name : 'pentax 500',
        tag : 'pentax500',
        price : 400,
        incart : 0 
    }
    ,
    {
        name : 'Nikon D7000',
        tag : 'nikond7000',
        price : 700,
        incart : 0 
    }
    ,
    {
        name : 'Pentax 700',
        tag : 'Pentax700',
        price : 550,
        incart : 0 
    }
    ,
    {
        name : 'Pentax 200',
        tag : 'pentax200',
        price : 270,
        incart : 0 
    }
    ,
    {
        name : 'Nikon D500',
        tag : 'nikond500',
        price : 600,
        incart : 0 
    }
    ,
    {
        name : 'Pentax 659',
        tag : 'pentax659',
        price : 500,
        incart : 0 
    }
]

let container_a = document.querySelector(".container-a");
if (container_a) {
    let card_html = ``;
    for (let i = 0; i < products.length; i++) {
        card_html += `<div class="container">`;
        let j;
        for (j = 0; j < 4 && i + j < products.length; j++) {
        card_html += `
        <div class="card">
            <div class="img">
                <img src="images/${products[i + j].tag}.jpeg">
            </div>
            <div class="top-text">
                <div class="name">${products[j + i].name}</div>
                <p>${products[j + i].price}$</p>
            </div>
            <div class="add-cart">
                <a href="#">Add cart</a>
            </div>
        </div>`;
        }
        i += j - 1;
        card_html += `</div>`; 
    }
    container_a.innerHTML = card_html;
}