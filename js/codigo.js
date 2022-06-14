/**
 * Es el preload de la pagina para que aparezca una camara de carga 
 */
window.onload = function () {
    $('#onload').fadeOut(); //cambia gradualmente la opacidad, para los elementos seleccionados, de visible a oculto 
    $('body').removeClass('hidden'); //Borra la clase del body
}

class TextoAnimado {
    constructor(id, objetivo) {
        this.texto = document.getElementById(id);
        this.objetivo = document.getElementById(objetivo);
        this.letras = this.texto.innerText.split(" "); /*Accedemos al this, cada una de las letras con split */

        this.texto.innerText = ''; /*obtenemos el texto de un elemento */

        /*Acceder por cada una de las letras, ejecutar una funcion */
        this.letras.forEach((letra) => {
            let caracter = letra === ' ' ? '&nbsp;' : letra; /*codigo para escapar del espacio */ /* :letra es por si letra no es un esapcio que guarde normalmente */

            this.texto.innerHTML = this.texto.innerHTML + `
				<div>
					<span>${caracter}</span>
					<span class="segunda-linea">${caracter}</span>
				</div>
			`;
        });

        this.objetivo.addEventListener('mouseenter', () => { /*cuando pase el cursor ejecute una funcion */
            let cuenta = 0;

            const intervalo = setInterval(() => {
                if (cuenta < this.texto.children.length) { /*Si la cuenta es menor a la cantidad de hijos que tenemos en el this */
                    this.texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo);
                }
            }, 30); /*El codigo que se realiza cada 30 segundos, y anima a cada letra para que suba */
        });

        this.objetivo.addEventListener('mouseleave', () => { /*Cuando pase el cursor ejecute una funcion */
            let cuenta = 0;

            const intervalo = setInterval(() => {
                if (cuenta < this.texto.children.length) { /*Si la cuenta es menor a la cantidad de hijos que tenemos en el this*/
                    this.texto.children[cuenta].classList.remove('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo);
                }
            }, 30);/*El codigo que se realiza cada 30 segundos, y anima a cada letra para que baje */
        });

    }
}

new TextoAnimado('logo','logotipo'); /*Creo un nuevo texto animdado*/



