const root = document.querySelector("#root")


export const makeCard = (type)=> {
    
    for(let i = 0; i < type.cards.length; i++){
        let card = document.createElement("div")
        let name = document.createElement("h3")
        name.innerText = type.cards[i].name//${}`
        console.log(type.cards[i])
        let img = document.createElement("img")
        img.src = type.cards[i].imageUrl


        let remove = document.createElement("button")
        remove.innerText = "X"



        remove.addEventListener("click", (evt)=>{
            console.dir(evt.target)
            evt.target.parentNode.parentNode.removeChild(evt.target.parentNode)
            
        })

        card.append(name,img,remove)
        root.append(card)
    }
  

    
}
// ajax("https://official-joke-api.appspot.com/random_ten" , (res)=>{
//     let r = JSON.parse(res)
//     r.results.array.forEach(item => {
//         makeCard(item)
        
//     })
// })