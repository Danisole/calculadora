const displayValorAnterior = document.getElementById("valorAnterior");
const displayValorActual = document.getElementById("valorActual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const borrarNumero = document.getElementById("borrar")
const borrarTodoNumero = document.getElementById("borrarTodoNumero")

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton =>{

    boton.addEventListener("click", ()=>{
        display.agregarNumero(boton.innerHTML)
    })
})

borrarNumero.addEventListener("click", ()=>{
    display.borrar();
})

borrarTodoNumero.addEventListener("click", ()=>{
    display.borrarTodo()
})

botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", ()=> display.computar(boton.value))
})