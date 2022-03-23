'use strict'

/* Adicionando manipulador de Eventos*/

const switcher = document.querySelector('.btn'); // para obter a referência do botão.

/* Em seguida, adicione o ouvinte e o manipulador do evento click.
No código a seguir, você adiciona um ouvinte para o evento click.
A função passada para o ouvinte de eventos é seu manipulador de eventos real.*/
switcher.addEventListener('click', function() {
    document.body.classList.toggle("tema-claro")
    console.log("Atual nome de classe" + className);


    var className = document.body.className;
    if(className == "tema-claro") {
        this.textContent = "Tema escuro";
    } else if(className == "tema-escuro") {
        this.textContent = "Tema claro";
    }
})

/*No código anterior, você usou o método toggle para alternar o elemento para a classe dark-theme.

Isso aplica, automaticamente, os estilos de tema escuro em vez do tema claro. No entanto, o rótulo do 
botão também precisa ser atualizado para mostrar o tema correto, portanto, você precisa adicionar uma 
instrução if para verificar o tema atual e atualizar o rótulo do botão.

Confira como deve ser o código JavaScript completo acima*/