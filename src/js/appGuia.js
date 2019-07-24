
/*let classs = document.getElementsByTagName('article').item(0).className
document.getElementsByTagName('article').item(0).append(classs)  // lo agrega
document.getElementsByTagName('article').item(0).innerHTML ='sfsf' // lo elimina y muestra esto entero
*/

let classs = document.getElementsByTagName('article')
for (let i = 0; i < classs.length; i++) {
    let classs = document.getElementsByTagName('article').item(i).className
    document.getElementsByTagName('article').item(i).append(classs)  // lo agrega
   // console.log(classs)
}


/*function clicka(){console.log('hola que tal ')}
document.body.getElementsByClassName('article').addEventListener('click', clicka);*/


