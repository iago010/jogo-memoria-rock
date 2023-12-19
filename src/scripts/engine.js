const discos = [
    '../src/imagens/american.jpg',
    '../src/imagens/american.jpg',
    '../src/imagens/blitzkid.jpg',
    '../src/imagens/blitzkid.jpg',
    '../src/imagens/cabeca.jpeg',
    '../src/imagens/cabeca.jpeg',
    '../src/imagens/capital.jpg',
    '../src/imagens/capital.jpg',
    '../src/imagens/goodmorning.jpg',
    '../src/imagens/goodmorning.jpg',
    '../src/imagens/infestissumam.jpg',
    '../src/imagens/infestissumam.jpg',
    '../src/imagens/ira-acustico.jpg',
    '../src/imagens/ira-acustico.jpg',
    '../src/imagens/lavotanovo.jpg',
    '../src/imagens/lavotanovo.jpg',
    '../src/imagens/legiao.jpg',
    '../src/imagens/legiao.jpg',
    '../src/imagens/nirvana.jpg',
    '../src/imagens/nirvana.jpg',
    '../src/imagens/papa_pop.jpg',
    '../src/imagens/papa_pop.jpg',
    '../src/imagens/ramones-capa.jpg',
    '../src/imagens/ramones-capa.jpg',
    '../src/imagens/replicantes.jpg',
    '../src/imagens/replicantes.jpg',
    '../src/imagens/rpm.jpeg',
    '../src/imagens/rpm.jpeg',
    '../src/imagens/sexpistols.jpg',
    '../src/imagens/sexpistols.jpg',
];

let abrirDiscos = [];

let embaralhar = discos.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < discos.length; i++) {
    let caixa = document.createElement("div");
    caixa.className = "item";
    
    // tag <img> para exibir as imagens
    let imagem = document.createElement("img");
    imagem.src = embaralhar[i];
    imagem.alt = "Capa do Disco";
    caixa.appendChild(imagem);
    document.querySelector(".game").appendChild(caixa);

    //função de clique
    caixa.onclick = handleClick;
}

function handleClick(){
    if (abrirDiscos.length < 2){
        this.classList.add("caixaAberta");
        abrirDiscos.push(this);
    }

    if (abrirDiscos.length == 2){
        setTimeout(checar, 500);
    }
}

function checar(){
    if (abrirDiscos[0].innerHTML === abrirDiscos[1].innerHTML){
        abrirDiscos[0].classList.add("caixaCerta");
        abrirDiscos[1].classList.add("caixaCerta");
    } else {
        abrirDiscos[0].classList.remove("caixaAberta");
        abrirDiscos[1].classList.remove("caixaAberta");
    }

    abrirDiscos = [];

    if (document.querySelectorAll(".caixaCerta").length === discos.length){
        alert("Você Venceu!")
    }
}