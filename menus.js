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


/*
PARA LOS BOTONES DE LA GUIA
*/

const desastre1 = document.querySelector("#desastre1");
const desastre2 = document.querySelector("#desastre2");
const desastre3 = document.querySelector("#desastre3");
const desastre4 = document.querySelector("#desastre4");
const desastre5 = document.querySelector("#desastre5");


/*Menu desastre1*/
desastre1.addEventListener("click", (d1) => {
    d1.preventDefault();
    const sectionD1 = document.querySelector(".desastre1");
    sectionD1.scrollIntoView({behavior: "smooth"});
});

/*Menu desastre2*/
desastre2.addEventListener("click", (d2) => {
    d2.preventDefault();
    const sectionD2 = document.querySelector(".desastre2");
    sectionD2.scrollIntoView({behavior: "smooth"});
});

/*Menu desastre3*/
desastre3.addEventListener("click", (d3) => {
    d3.preventDefault();
    const sectionD3 = document.querySelector(".desastre3");
    sectionD3.scrollIntoView({behavior: "smooth"});
});

/*Menu desastre4*/
desastre4.addEventListener("click", (d4) => {
    d4.preventDefault();
    const sectionD4 = document.querySelector(".desastre4");
    sectionD4.scrollIntoView({behavior: "smooth"});
});

/*Menu desastre5*/
desastre5.addEventListener("click", (d5) => {
    d5.preventDefault();
    const sectionD5 = document.querySelector(".desastre5");
    sectionD5.scrollIntoView({behavior: "smooth"});
});

/*
PARA LOS ACCESOS DEL FORM
*/

const iniciars= document.querySelector("#iniciars");

iniciars.addEventListener("click", (i) => {
    i.preventDefault();
    const sectioni = document.querySelector(".Mapa");
    sectioni.scrollIntoView({behavior: "smooth"});
});



const registros = document.querySelector("#registros");

registros.addEventListener("click", (r) => {
    r.preventDefault();
    const sectionr = document.querySelector(".Funcionamiento");
    sectionr.scrollIntoView({behavior: "smooth"});
});


/*boton en alarma*/
const cards=document.querySelector('#cards')

const opencards=() => {
  cards.style.display='flex';

  closecards();
}

const closecards=() =>{
    setTimeout(()=>{
        cards.style.display='none';
    },2500)
}