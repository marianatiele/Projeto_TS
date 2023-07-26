/*função do botão menuMob*/
function openMenu(){
    document.getElementById("menu").style.width = "100%";
}

function closeMenu(){
    document.getElementById("menu").style.width = "0";
}


/*Cria o nome na tela */
const el = document.querySelector('#issoVigor');
const istoe = '# Isso é Vigor Plus';
const intervalo = 100;
function texto(el, istoe, intervalo) {

    const char = istoe.split('').reverse();

    const tempo = setInterval(() => {

        if (!char.length) {
            return clearInterval(tempo)
        }
        const next = char.pop();
        el.innerHTML += next;

    }, intervalo);


}

/*Chamar a cada intervalo a funcao */
let temp = setInterval(texto(el, istoe, intervalo), 200);