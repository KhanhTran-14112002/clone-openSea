const headerIconMenuElement = document.querySelector(".header--icon-menu");
const menuElement = document.querySelector(".container--menu");
const menuListElement = document.querySelector(".container--menu-list");



// đóng mở menu trên fixed

headerIconMenuElement.onclick = function(e){
    menuElement.classList.toggle("show")
}

menuElement.addEventListener('click',function(e){
    e.stopPropagation();
    // e.preventDefault();
    this.classList.toggle("show")
    console.log(e.target);
})
menuListElement.addEventListener('click',function(e){
 e.stopPropagation()
})


// phần body--header
const bodySubNavElement = document.querySelectorAll(".body--subnav");
// const bodySubNavActiveElement =document.querySelector(".body--subnav.active");
bodySubNavElement.forEach((element,index)=>{
    element.onclick = function(e){

        e.preventDefault();
        document.querySelector(".body--subnav.active").classList.remove("active");
        this.classList.add("active")
    }
})


// body--content
// get api
const api = "http://localhost:3000/item-opensea";
fetch(api)
    .then(function(posts){
        return posts.json();
    })
    .then(function(posts){
        let htmls = posts.map(function(post){
            return `  <div class="body--content-item">
            <img class="d-block" src="${post.img}" alt="">
            <div class="bg-body">
                <h4 class="px-4 py-4">${post.name}</h4>
            <div class="body--content-item-content d-flex px-4">
                <div class="flex-grow-1">
                    <p>${post.floor}</p>
                    <h4>${post.valueFloor}</h4>
                </div>
                <div class="flex-grow-1">
                    <p>${post.volume}</p>
                    <h4>${post.valueVolume}</h4>
                </div>
            </div>
            </div>
            
        </div>`;
        });
        let html = htmls.join(" ");

        console.log(html)
        var bodyContentElement = document.querySelector(".body--content-list")
        bodyContentElement.innerHTML = html;
        

    })




    