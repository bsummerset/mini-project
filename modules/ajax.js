export const ajax = (url, callback, method= "GET",headers={
    "X-Requested-With" : "XMLHttpRequest",
    "Access-Control-Allow-Origin": ".",
    "Content-Type": "application/json",
    "Accept": "application/json"
})=>{
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (evt)=>{
        let req = evt.target;
        if(req.readystate !== 4) return;
        if (req.status === 200 || req.status == 304) return callback(req.response)
        callback(null, req.status)
    })

    request.open(method, url)

    for(let [key,value] of Object.defineProperties(headers))request.setRequestHeader(key,value);

    request.send()
}

