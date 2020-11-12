import {ajax} from "./modules/ajax.js"
import{makeCard} from "./modules/card.js"

//ajax("https://official-joke-api.appspot.com/random_ten" , (res)=>JSON.parse(res).results.forEach(makeCard))

const root = document.querySelector("#root")


// export const makeCard = (type)=> {
//     let card = document.createElement("div")
//     let name = document.createElement("h3")
//     type.innerText = `${name.setup}${name.punchline}`

//     let remove = document.createElement("button")
//     remove.innerText = "X"



//     remove.addEventListener("click", (evt)=>{
//         console.dir(evt.target)
//         evt.target.parentNode.parentNode.removeChild(evt.target.parentNode)
//     })

//     card.append(type,remove)

//     root.append(card)
// }
// ajax("https://api.pokemontcg.io/v1/cards" , (res)=>{
//     let r = JSON.parse(res)
//     console.log(res)
//     r.results.array.forEach(item => {
//         // makeCard(item)
//         console.log(item)
//     })
// })


    
fetch("https://api.pokemontcg.io/v1/cards")
.then((response) => response.json())
.then((data) => makeCard(data));