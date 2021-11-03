const mybutton = document.getElementById("click")
const myul = document.getElementById("ul")
let contador = 1
const eliminar = document.getElementById("delete");

mybutton.onclick = (event) =>{
    myul.innerHTML += `<li>prueba ${contador}</li>`
    contador++
}
eliminar.onclick = (event) =>{
    myul.removeChild(myul.lastChild)
    contador--
}