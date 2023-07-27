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
    

    //Lógica 
    let validaNome = nome.value != 0 && nome.value !== '' && isNaN(nome.value)
    let resposta = validaEmail(email)
    if(resposta == true){
        console.log('email valido')
    
    }else{
        console.log('email invalido')
    }

    //Chamando o back de acordo com a validação
    if(validaNome && resposta == true){
        EnviaMeg()
    }

    
}
//validando o email
function validaEmail(email){
       let re = /\S+@\S+\.\S+/;
        return re.test(email);
 
}
   