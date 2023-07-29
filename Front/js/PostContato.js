function eventForm(event) {
    event.preventDefault();
}
function EnviaMeg() {
//Pegando os dados do formulário para enviar para api
let form = document.querySelector('.form-geral');

let nome = form.querySelector('#nome').value
let email = form.querySelector('#email').value
let telefone = form.querySelector('#telefone').value
let mensagem  = form.querySelector('#text-men').value

//criar objeto para enviar ao banco
let contato = {
    nome: nome,
    email: email,
    telefone: telefone,
    mensagem: mensagem
}

//Stringificando antes de enviar para o banco
contato = JSON.stringify(contato)


//Criando o header para enviar junto com o corpo da requisição
const myInit = {
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: contato
  };

//enviar para o back, dados salvos no banco

    //chamando a API
    fetch('http://localhost:3000/registrar', myInit)
    .then(response  => response.json())
    .then(data => {
       console.log(data)
    }).catch((error) => {
        console.log(error)
    })
    
    
        

        
   
}