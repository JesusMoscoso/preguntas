document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);

    const form = document.getElementById('preguntas');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Definimos las respuestas correctas (ajusta según tus respuestas reales)
        const respuestasCorrectas = {
            Comida: 'pizza',
            Clima: 'frio',
            Serie: 'Hobbit',
            Millonario: 'Mecaso',
            p6: 'perro',
            p7: 'chocolate',
            p8: 'callado',
            p9: 'rock',
            p10: 'salir',
            p11: 'orgulloso',
            p12: 'Todas',
            p13: 'irAcabina',
            p14: 'Tucumple',
            p17: 'moderado',
            p18: 'nalgas',
            p20: 'besarte'
        };

        let correctas = 0;
        let total = Object.keys(respuestasCorrectas).length;

        for (let key in respuestasCorrectas) {
            let seleccion = form.elements[key]?.value;
            if (seleccion === respuestasCorrectas[key]) {
                correctas++;
            }
        }

        let porcentaje = Math.round((correctas / total) * 100);
        alert(`¡Obtuviste un ${porcentaje}% de respuestas correctas!`);

        // También puedes mostrarlo en el HTML
        const resultado = document.querySelector('h5');
        resultado.innerText = `Porcentaje de conocimiento: ${porcentaje}%`;
    });
});