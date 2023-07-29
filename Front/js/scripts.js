/*função do botão menuMob*/
function openMenu(){
    document.getElementById("menu").style.width = "100%";
}

function closeMenu(){
    document.getElementById("menu").style.width = "0";
}
//Validações
function ValidaForm(){
    
    let nome = document.getElementById('nome')
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let res = document.getElementById('resposta')
    let respostaNome = document.getElementById('respostaNome')
    let resTelefone = document.getElementById('respostaTel')
    //Lógica 
    let validaNome = nome.value != 0 && nome.value !== '' && isNaN(nome.value)

    if(isNaN(telefone) == true){
        resTelefone.innerHTML = 'Telefone Inválido'
    }

    if(validaNome == false){
        respostaNome.innerHTML = 'Nome Inválido'
    }
    let resposta = validaEmail(email)
    if(resposta == false){

        res.innerHTML ='email invalido'
    
    }

    //Chamando o back de acordo com a validação
    if(validaNome && resposta == true){
        EnviaMeg()
        alert('Dados Enviados')
    }

    
}
//validando o email
function validaEmail(email){
       let re = /\S+@\S+\.\S+/;
        return re.test(email);
 
}
   