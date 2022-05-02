// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/script.js"
let im=document.querySelector("#navbar")
im.innerHTML=navbar()

let query=document.querySelector("#search_input").value
document.querySelector("#search_input").addEventListener("enter",get_data)
let get_data= async () => 
{
    try{
        let res=await fetch('https://masai-mock-api.herokuapp.com/news?q='+query)
        let data= await res.json()
        append_data(data)
        console.log(data)
    }
    catch(err){
        console.log(err)
    }

} 
//get_data()   
 function append_data(data) 
{
    data.forEach(function(el)
    {
        let a=document.createElement("img")
        a.src=el.urlToImage
        let b=document.createElement("p")
        b.innerText=el.title
        let c=document.createElement("p")
        c.innerText=el.content
        let y=document.querySelector("#print")
        y.append(a,b,c)
    })
}
let query1=document.querySelector("#in").innerHTML
let get_data1= async () => 
{
    try{
        let res=await fetch('https://masai-mock-api.herokuapp.com/news?q='+query1)
        let data= await res.json()
        append_data1(data.res)
        console.log(data)
    }
    catch(err){
        console.log(err)
    }

} 


function append_data1(data) 
{
    data.forEach(function(el)
    {
        let a=document.createElement("img")
        a.src=el.urlToImage
        let b=document.createElement("p")
        b.innerText=el.title
        let c=document.createElement("p")
        c.innerText=el.content
        let y=document.querySelector("#print")
        y.append(a,b,c)
    })
}