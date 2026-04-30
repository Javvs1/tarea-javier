function mostrarInfo(opcion) {

    let texto = "";

    if (opcion === "cualidades") {
        texto = "Soy una persona responsable, proactiva, dedicada y con muchas ganas de aprender. Me gusta mejorar y aprender constantemente, ademas de poder cumplir con mis objetivos académicos y personales.";
    }

    else if (opcion === "tecnicas") {
        texto = "Tengo conocimientos en C#, Python, HTML, CSS, JavaScript y bases de datos SQL, MySQL, MongoDB. He trabajado en proyectos como sistemas de automatización, bancarios y gestión de factibilidad.";
    }

    else if (opcion === "blandas") {
        texto = "Tengo habilidades para trabajar en equipo, comunicación efectiva, resolución de problemas y adaptabilidad a los nuevos entornos laborales.";
    }

    let caja = document.getElementById("info");
caja.style.opacity = 0;

setTimeout(() => {
    caja.innerText = texto;
    caja.style.opacity = 1;
}, 200);}