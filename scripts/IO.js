import { Juego } from '../scripts/Juego.js';

const nivelDificultadRecuperado = localStorage.getItem('nivelDificultad');

export class IO {
    constructor() {
        this.juego = new Juego();
   
        this.palabraParaAdivinarElement = document.getElementById('palabraSecreta');
        this.intentosRestantesElement = document.getElementById('intentosRestantes');
        this.vocalesUsadasElement = document.getElementById('vocalesUsadas');
        this.letrasUsadasElement = document.getElementById('letrasUsadas');
        this.letraIngresadaElement = document.getElementById('letraIngresada');
        this.mensajeElement = document.getElementById('mensaje');
        this.palabra=document.getElementById('Palabra');
        this.btnPerder = document.getElementById('btnPerder');
        this.btnGanar = document.getElementById('btnGanar');
        this.letrasRestantesElement = document.getElementById('letrasRestantes');
        this.pistaElement = document.getElementById('Pista')
        this.categoriaElement = document.getElementById('Categoria');

        this.actualizarHTML();
    }

    actualizarHTML() {
        this.palabraParaAdivinarElement.textContent = this.juego.obtenerPalabraAdivinar();
        this.intentosRestantesElement.textContent = this.juego.obtenerIntentosRestantes();
        this.pistaElement.textContent = this.juego.obtenerPista();
        this.categoriaElement.textContent = this.juego.obtenerCategoria();

        if(nivelDificultadRecuperado==1){
            document.querySelector('.cLetras').style.display = 'none';
            this.letrasRestantesElement.textContent = this.juego.obtenerLetrasRestantes();
            this.vocalesUsadasElement.textContent = this.juego.obtenerLetrasUsadas().join(', ');
        }
        else if(nivelDificultadRecuperado==2 || nivelDificultadRecuperado==3){
            document.querySelector('.cVocales').style.display = 'none';
            this.letrasUsadasElement.textContent = this.juego.obtenerLetrasUsadas().join(', ');
        }

        if (this.juego.haTerminado()) {

            btnComprobar.disabled = true;
            if (this.juego.adivinoPalabra()) {
                document.querySelector('.Final').style.display = 'block';
                this.mensajeElement.textContent = '¡Ganaste!';
                this.palabra.textContent = this.juego.obtenerPalabraFinal();
                this.btnGanar.style.display = 'block';
            } else {
                document.querySelector('.Final').style.display = 'block';
                this.mensajeElement.textContent = '¡Perdiste!';
                this.palabra.textContent = this.juego.obtenerPalabraFinal();
                this.btnPerder.style.display = 'block';
            }
        }

        this.letraIngresadaElement.value = '';
    }
    
}


