const Asistencia = document.querySelector("#Asistencia");
const Funcionamiento = document.querySelector("#Funcionamiento");
const Alertas = document.querySelector("#Alertas");
const Mapa = document.querySelector("#Mapa");
const Guia = document.querySelector("#Guia");

/*Menu Asistencia*/
Asistencia.addEventListener("click", (a) => {
    a.preventDefault();
    const sectionA = document.querySelector(".Asistencia");
    sectionA.scrollIntoView({behavior: "smooth"});
});


/*Menu Funcionamiento*/
Funcionamiento.addEventListener("click", (f) => {
    f.preventDefault();
    const sectionF = document.querySelector(".Funcionamiento");
    sectionF.scrollIntoView({behavior: "smooth"});
});


/*Menu Alertas*/
Alertas.addEventListener("click", (al) => {
    al.preventDefault();
    const sectionAL = document.querySelector(".Alertas");
    sectionAL.scrollIntoView({behavior: "smooth"});
});


/*Menu Mapa*/
Mapa.addEventListener("click", (m) => {
    m.preventDefault();
    const sectionM = document.querySelector(".Mapa");
    sectionM.scrollIntoView({behavior: "smooth"});
});


/*Menu Guia*/
Guia.addEventListener("click", (g) => {
    g.preventDefault();
    const sectionG = document.querySelector(".Guia");
    sectionG.scrollIntoView({behavior: "smooth"});
});