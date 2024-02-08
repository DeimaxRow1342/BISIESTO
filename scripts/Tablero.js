//QUE TEMÁTICA Y NIVEL ELIGIO? :
const nivelDificultadRecuperado = localStorage.getItem('nivelDificultad');

if (nivelDificultadRecuperado) {
    console.log('Nivel de dificultad recuperado:', nivelDificultadRecuperado);
} else {
    console.log('Los valores no existen en localStorage.');
}
 
/*CLASE DEL TABLERO*/
export class Tablero {
    constructor() {
        this.famosos = [
            'CHAYANNE','ZENDAYA','ADELE', 'SHAKIRA', 'MADONNA', 'BEYONCE', 'RIHANNA', 'MALUMA', 'PITBULL', 'THALIA'
          ];
          
        this.ciudad_paises = [
            'BOLIVIA','BRAZIL','ARGENTINA', 'COLOMBIA', 'VENEZUELA', 'MEXICO', 'HONDURAS', 'ECUADOR', 'ALEMANIA', 'PARIS', 'CHINA', 'URUGUAY', 'CANADA'
          ];
          
        this.canciones = [
            'MI BUEN AMOR','BOYS DONT CRY','BABY ONE MORE TIME', 'TAKE ON ME', 'BOHEMIAN RAPSODY', 'THE MAN', 'LABIOS ROTOS', 'LA GATA BAJO LA LLUVIA', 'MR BLUE SKY', ''
          ];

          this.pistaciudad_paises = [
            'En el corazón de Sudamérica',
            'Casa del Carnaval y el fútbol',
            'Tierra del tango',
            'El país de la esmeralda',
            'La tierra de Simón Bolívar',
            'Famosa por su comida y cultura',
            'En el corazón de Centroamérica',
            'Donde nace la línea ecuatorial',
            'Famoso por su ingeniería y cerveza',
            'La Ciudad del Amor',
            'País asiático más poblado',
            'Montevideo y Punta del Este',
            'Gran país norteamericano, diverso'
          ];
          
          this.pistafamosos = [
            'Conocido por su sensualidad y baile',
            'Estrella joven de Hollywood',
            'Una poderosa voz británica',
            'La Reina del Pop',
            'Icono del pop y feminismo',
            'Reina del R&B y el pop',
            'De Barbados con amor',
            'El Pretty Boy de Colombia',
            'Dale!',
            'La Reina de las telenovelas'
          ];
          
          this.pistascanciones = [
            'Una canción de amor apasionada en español',
            'Una canción sobre la lucha contra la opresión',
            'El exitoso debut de una superestrella pop',
            'Un video musical con animación y aventuras',
            'Un himno icónico de la banda Queen',
            'Una canción que desafía estereotipos de género',
            'Una melodía de amor y desilusión',
            'Un clásico de la música ranchera mexicana',
            'Una canción alegre y llena de energía'
          ];
        this.palabraParaAdivinar = this.seleccionarPalabraAleatoria(nivelDificultadRecuperado);
        this.letrasAdivinadas = this.inicializarLetrasAdivinadas(this.palabraParaAdivinar);
        this.intentosRestantes = this.inicializarIntentosRestantes(nivelDificultadRecuperado);
        this.pista = this.inicializarPista(this.palabraParaAdivinar);
        this.imagenAhorcadoElement = document.getElementById("imagenAhorcado");
        this.letrasUsadas = [];
        this.contLetras = 0;
        this.categoria = this.inicializarCategoria(nivelDificultadRecuperado);
    }

    inicializarIntentosRestantes(nivelDificultadRecuperado){
        if(nivelDificultadRecuperado==1){
            return 2;
        }
        else if(nivelDificultadRecuperado==2 || nivelDificultadRecuperado==3){
            return 6;
        }
    }

    inicializarLetrasAdivinadas(palabra) {
        return palabra.split('').map(letra => (letra === ' ') ? ' ' : '_');
    }

    inicializarPista(palabra){
        for(let i = 0; i<this.famosos.length; i++){
            if(palabra==this.famosos[i]){
                return this.pistafamosos[i];
            }
        }

        for(let i = 0; i<this.ciudad_paises.length; i++){
            if(palabra==this.ciudad_paises[i]){
                return this.pistaciudad_paises[i];
            }
        }

        for(let i = 0; i<this.canciones.length; i++){
            if(palabra==this.canciones[i]){
                return this.pistascanciones[i];
            }
        }
    }

    seleccionarPalabraAleatoria(nivelDificultadRecuperado) {
        if(nivelDificultadRecuperado==1){
            return this.ciudad_paises[Math.floor(Math.random() * this.ciudad_paises.length)];
        }else if(nivelDificultadRecuperado==2){
            return this.famosos[Math.floor(Math.random() * this.famosos.length)];
        } else if(nivelDificultadRecuperado==3){
            return this.canciones[Math.floor(Math.random() * this.canciones.length)];
        }
    }

    inicializarCategoria(nivelDificultadRecuperado) {
        if(nivelDificultadRecuperado==1)
        {
            return "Ciudad/Paises";
        }
        else if(nivelDificultadRecuperado==2) {
            return "Famosos";
        }
        else if(nivelDificultadRecuperado==3) {
            return "Canciones";
        }
    }

    comprobarPalabra(palabra) {

        palabra = palabra.toUpperCase();
        
        var resultado = window.confirm("¿Estas segur@ de continuar? Si ingresas una palabra ya no te quedarán más intentos");

        if(resultado){
            if (this.palabraParaAdivinar.length === palabra.length) {
                let palabraCorrecta = true;
        
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] !== this.palabraParaAdivinar[i]) {
                        palabraCorrecta = false;
                        break;
                    }
                }
        
                if (palabraCorrecta) {
                    for (let i = 0; i < palabra.length; i++) {
                        this.letrasAdivinadas[i] = palabra[i];
                    }
                } else {
                    this.intentosRestantes = 0;
                }
            } else {
                this.intentosRestantes = 0;
            }
        }
        else{

        }
    }

    comprobarLetra(letra) {

        letra=letra.toUpperCase();

        if(nivelDificultadRecuperado===2 || nivelDificultadRecuperado===3){
            if (!/^[a-zA-Z]$/.test(letra)) {
                alert("Por favor, ingrese solo letras.");
                document.getElementById("letraIngresada").value = "";
                return; 
            }
        }

        else if(nivelDificultadRecuperado==1){
            if (!/^[AEIOU]$/.test(letra)) {
                alert("Por favor, ingrese solo vocales.");
                document.getElementById("letraIngresada").value = "";
                return; 
            }
        }

        if (this.letrasUsadas.includes(letra)) {
            alert("Esta letra ya ha sido utilizada.");
            document.getElementById("letraIngresada").value = "";
            return; 
        }

        if(nivelDificultadRecuperado==1 && this.letrasUsadas.length>=2){
            alert("Cantidad maxima de vocales utilizadas. Ingresa la palabra")
            document.getElementById("letraIngresada").value = "";
            return;
        }

        // Comprobar si la letra está en la palabra secreta
        let acerto = false;
        for (let i = 0; i < this.palabraParaAdivinar.length; i++) {
            if (this.palabraParaAdivinar[i] === letra) {
                this.letrasAdivinadas[i] = letra;
                acerto = true;
            }
        }

        // Si no acertó, reducir intentos
        if (!acerto && this.intentosRestantes>=0) {
            this.intentosRestantes--;
            this.imagenAhorcadoElement.src = "../Imagenes/Secuencia muñequito/img" + (7 - this.intentosRestantes) + ".png";
        }

        // Registrar letra usada
        this.letrasUsadas.push(letra);

        this.contLetras = this.letrasUsadas.length;
    }

    obtenerPalabra(){
        return this.palabraParaAdivinar;
    }

    obtenerPalabraAdivinar() {
        return this.letrasAdivinadas.join(' ');
    }

    obtenerIntentosRestantes() {
        return this.intentosRestantes;
    }

    obtenerLetrasUsadas() {
        return this.letrasUsadas;
    }

    haTerminado() {
        return this.intentosRestantes <= 0 || !this.letrasAdivinadas.includes('_');
    }

    adivinoPalabra() {
        return !this.letrasAdivinadas.includes('_');
    }

    obtenerLetrasRestantes() {
        return this.contLetras;
    }

    obtenerPista(){
        return this.pista;
    }

    obtenerCategoria(){
        return this.categoria;
    }
}