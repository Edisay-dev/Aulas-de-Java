function adiconartarefa() {
    // recebe valor do input do usuário
    const inputtarefa = document.getElementById("inputtarefa")
    let tarefa = inputtarefa.ariaValueMax.trim()

    const mensagem = document.getElementById ("mensagem")

    // se o valor do input for vazio então mostre umas mensagem de erro para o usuario
    // if = se fizer - else = se não fizer

    if (tarefa == "") {
        let mensagemErro = "digite uma tarfe para adiciona-la a sua lista"
        mensagem.textContent = mensagemErro
    }
    else {
        // mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "tarefa adicionada com sucesso"
        mensagem.textContent = mensagemSucesso

         // cria novo item na lista
    const listatarefa = document.getElementById(listatarefa)
    let novatarefa = document.createElement("li")
    novatarefa.textContent = tarefa
    listatarefa.appendChild("novatarefa") 
}
    }
   