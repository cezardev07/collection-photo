const article = document.querySelector(".feed")
//console.log(article)

const imagens = [
    {
        item:{
            url:"https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/13947143/pexels-photo-13947143.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/7605189/pexels-photo-7605189.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/15099288/pexels-photo-15099288.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/8386685/pexels-photo-8386685.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1600",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/15490610/pexels-photo-15490610.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/15469080/pexels-photo-15469080.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/15205293/pexels-photo-15205293.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/6580014/pexels-photo-6580014.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/14996713/pexels-photo-14996713.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/4277088/pexels-photo-4277088.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/5255249/pexels-photo-5255249.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/4246234/pexels-photo-4246234.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1600",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/3881172/pexels-photo-3881172.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/6231809/pexels-photo-6231809.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/5608918/pexels-photo-5608918.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
    {
        item:{
            url:"https://images.pexels.com/photos/6147410/pexels-photo-6147410.jpeg?auto=compress&cs=tinysrgb&w=300",
            status: true
        }
    },
]
//console.log(imagens)

let count = 10;

const start = function() {

    for(let i = 1; i <= count; i++){
        //console.log(i)
        const publi = document.createElement("div")

        publi.classList = "publi"

        article.appendChild(publi)

        for(let i = 0; i < imagens.length; i++){
            //console.log(i)
    
            const card = document.createElement("div")

            card.classList = `card card${i}`
            
            publi.appendChild(card)

            //console.log(imagens[i].item.url)
            
            card.style.backgroundImage = `
                url(${imagens[i].item.url})
            `

        }

    }

}

start()

const btnTheme = document.querySelector(".i")
//console.log(btnTheme)

btnTheme.onclick = theme;

function theme(){
    
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const secCenter = document.querySelector(".sec-center")

    body.classList.toggle("darck-body")
    secCenter.classList.toggle("darck-item")
    header.classList.toggle("darck-item")

}

const cookie = document.querySelector(".cookie")
//console.log(cookie)

const btnCookie = document.querySelector("#btnCookie")

btnCookie.onclick = close;

function close(){

    cookie.style.display = "none"

    alert("Olá seja bem vindo(a). OBS: Fique tranquilo o cookie 🍪 e apenas Estatico não tem funcionalidade❤️")

}

console.log("Hello Dev!")
