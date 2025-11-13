function adicionararefa(){

    // recebe o valor do input do 
    let inputtarefa = document.getElementById("inputtarefa")
    let tarefa = inputtarefa.value
    // a partir daqui vai criar novo item (li) e insere na lista (ul)
    let listatarefa = document.getElementById("listatarefa")
    let novatarefa = document.createElement("li")
    novatarefa.textContent = tarefa
    listatarefa.appendChild(novatarefa)
}