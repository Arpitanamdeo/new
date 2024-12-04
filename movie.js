
let inp=   document.querySelector('input')
let btn=   document.querySelector('button')

btn.addEventListener('click',()=>{
    let searchText=inp.value
fetch(` https://api.tvmaze.com/search/shows?q=${searchText}`).
then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data);
    

})

})
//console.log(data);
let div =  document.querySelector("div"
    for (let movieData of data){
        console.log(movieDAta,"hehehe");
        let img=document.querySelector
        let h2=document.createElementN("img")
        img.setAttributrs(src,movieData.show.image)
        h2.innerText=movieData.show.name
        div.append(img,h2)
        
    }
)
let obj={
    id:
}


let arr=[1,2,3,4,5,6,7]
let num=[1,2,3,4,5....arr.]
console.log(num);
function sum(a,b,....num){
    console.log(num);



}
//sum(5,5,5,5,4,5,6,3,56,3,5,3,5,3,5,556,4)
let obj={
    id:1'
    name: 'hello'
    age:137
}
//let a=obj.id
//let b=obj.name
//let{id,name}=obj
//console.log(name);
let arr=[1,2,3,4,5,]  
    import { user,add } from "./index.js"
    import a from./indexe.js'
    console.log (user,"hehehe");
    a(10,5)
    add