const btn = document.querySelectorAll(".botao")

const personagens = document.querySelectorAll(".personagem");

btn.forEach((btn, indice) => {
    btn.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        btn.classList.add("selecionado");


        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelected = document.querySelector(".personagem.selecionado");

    personagemSelected.classList.remove("selecionado");
}

function desselecionarBotao() {
    const btnSelected = document.querySelector(".botao.selecionado");
    btnSelected.classList.remove("selecionado");
}

