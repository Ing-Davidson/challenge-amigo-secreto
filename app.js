// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    amigoAgregado = amigo.value;
    if (amigoAgregado == "") {
        alert("Por favor, inserte un nombre valido.");
    } else {
        amigos.push(amigoAgregado);
        amigo.value = "";
        updateFriendList();
    }
}

function updateFriendList(){
    listaAmigos.innerHTML = "";
    for (let i = 0; i  < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        
    }
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert("Primero agrega amigos para sortear");
    } else {
        resultado.innerHTML = "";
        let nombresAleatorios = Math.floor(Math.random() * amigos.length);
        let li = document.createElement("li");
        li.textContent = `El amigo secreto es ${amigos[nombresAleatorios]}`
        resultado.appendChild(li);
    }
}