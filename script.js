const haikus = [
    "En el cielo azul, el viento canta su paz, susurro de luz.",
    "Bajo el silencio, la brisa lleva consigo el eco del sol.",
    "Lluvia en calma, hojas danzan al compás del atardecer.",
    "Flores de cerezo en el cielo oscuro entre ellas la melancolía florece.",
    "Al sentirme enfermo durante el viaje mis sueños vagaron sobre un campo de yerba seca.",
    "Amanecer lejos de casa hace neblar sobre las montañas.",
    "En la blanca arena griega, descansan los turistas y desembarcan los inmigrantes.",
    "Se extingue el día pero no el canto de la alondra.",
    "Una rana se sumerge en el viejo estanque y se escucha el ruido del agua.",
    "La leche Materna sube por las montañas, el vigía es angelical, niño sin hambre.",
    "A mi ojo doy, sin apenas saberlo, luz de tu día",
    "El alumno lee, El maestro muestra y educa, El sabio solo es…",
    "Lindo poema, del Catatumbo llega, En Copenhague leo.",
    "el trinar de los pájaros en sus nidos revela su unión",


];

function mostrarHaikuAleatorio() {
    const randomIndex = Math.floor(Math.random() * haikus.length);
    document.getElementById('haiku').innerHTML = haikus[randomIndex];
}