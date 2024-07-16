function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);  

    elemento === null ? console.log('Elemento nao encontrado'): elemento.play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //tecla apertada
    tecla.onkeydown = function(evento) {

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }  
    }

    //tecla solta 
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
