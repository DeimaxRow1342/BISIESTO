import { Tablero } from '../scripts/Tablero.js';


export class Juego {
    constructor() {
        this.tablero = new Tablero();
    }

    comprobarPalabra(palabra){
        this.tablero.comprobarPalabra(palabra);
    }

    comprobarLetra(letra) {
        this.tablero.comprobarLetra(letra);
    }

    obtenerPalabraFinal(){
        return this.tablero.obtenerPalabra();
    }

    obtenerPalabraAdivinar() {
        return this.tablero.obtenerPalabraAdivinar();
    }

    obtenerIntentosRestantes() {
        return this.tablero.obtenerIntentosRestantes();
    }

    obtenerLetrasUsadas() {
        return this.tablero.obtenerLetrasUsadas();
    }

    haTerminado() {
        return this.tablero.haTerminado();
    }

    adivinoPalabra() {
        return this.tablero.adivinoPalabra();
    }

    obtenerLetrasRestantes() {
        return this.tablero.obtenerLetrasRestantes();
    }

    obtenerPista(){
        return this.tablero.obtenerPista();
    }

    obtenerCategoria(){
        return this.tablero.obtenerCategoria();
    }
}

