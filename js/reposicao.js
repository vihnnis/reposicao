 // JavaScript source code
function cadastrar(){
    let cpf = cadastro.cpf.value 
    let password = cadastro.password.value
    let confirm = cadastro.confirm.value

    if(cpf.length != 11){
        alert("CPF inválido")
        registro.cpf.focus()
        return false
    }
    if(isNaN(cpf)){
        alert("Informe apenas números para o campo CPF")
        registro.cpf.focus()
        return false
    }

    if(password != confirm){
        alert("Senhas não conferem")
        registro.confirm.focus()
        return false
    }

    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/

    if(!regex.exec(senha)){
        alert("A senha deve conter no mínimo uma letra maiúscula, uma letra minúscula, um n�mero, um caractere especial, m�nimo 6 e m�ximo 10 caracteres")
        registro.senha.focus()
        return false
    }
}