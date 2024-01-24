let elementosDuvida = document.querySelectorAll('.duvida')


elementosDuvida.forEach(function(duvida){
    // duvida.classList.add("Fundo Verde")
    // para adicinar uma classe nova nos elemetos selecionados
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})