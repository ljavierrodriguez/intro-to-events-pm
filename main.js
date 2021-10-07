window.onload = function(){
    // Ejecuta todo el codigo existente cuando la pagina esta totalmente cargada;
    // BOM Browser Object Model
    /* alert("Ingresando a la pagina");
    confirm('Te agrada la clase?');
    prompt('Ingresa tu nombre');

    saludo(); */
}

/* function saludo(){
    alert("Hola jesus");
} */

/* const saludo = function(){
    alert("Hola Frandy");
} */

/* const saludo = (evento, nombre, apellido) => {
    console.log(evento);
    console.log(`"Evento mouseover (${nombre} ${apellido})"`);
} */

//let divBox = document.querySelector("[class=box]");
/* let divBox = document.querySelector(".box");

divBox.addEventListener("mouseover", saludo);
divBox.addEventListener("click", (e) => {
    console.log(e);
    saludo(e, "Luis", "Rodriguez");
}) */

/* divBox.onmouseover = function(){
    saludo();
} */


let form = document.getElementById('buscarNombre');

form.addEventListener("submit", function(evento){
    evento.preventDefault(); // evita el comportamiento habitual del elemento
    console.log(evento);
    console.log(evento.target);
    
    /* let nombre = document.querySelector("[name=nombre]");
    if(nombre.value !== ''){
        evento.target.submit();
    } */

    let rgUser = /[A-Za-z]{6,12}/;

    if(evento.target.username.value !== '' && rgUser.test(evento.target.username.value)){
        evento.target.submit();
    }else{
        let smallTag = document.querySelector('small');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar username";
    }


})