const Asistencia = document.querySelector("#Asistencia");
const Funcionamiento = document.querySelector("#Funcionamiento");
const Alertas = document.querySelector("#Alertas");
const Mapa = document.querySelector("#Mapa");
const Guia = document.querySelector("#Guia");
const InicioSes = document.querySelector("#InicioSes");
const RegistroSes = document.querySelector("#RegistroSes");

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


/*Menu InicioSes*/
InicioSes.addEventListener("click", (is) => {
    is.preventDefault();
    const sectionIS = document.querySelector(".containerA");
    sectionIS.scrollIntoView({behavior: "smooth"});
});


/*Menu RegistroSes*/
RegistroSes.addEventListener("click", (rs) => {
    rs.preventDefault();
    const sectionRS = document.querySelector(".Funcionamiento");
    sectionRS.scrollIntoView({behavior: "smooth"});
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


/*footer link*/
const Tutorial = document.querySelector("#Tutorial");

Tutorial.addEventListener("click", (t) => {
    t.preventDefault();
    const sectionT = document.querySelector(".Funcionamiento");
    sectionT.scrollIntoView({behavior: "smooth"});
});


const Donante = document.querySelector("#Donante");

Donante.addEventListener("click", (d) => {
    d.preventDefault();
    const sectionD = document.querySelector(".Asistencia");
    sectionD.scrollIntoView({behavior: "smooth"});
});


/*BOTON DEL MAPA*/

const apartado1=document.querySelector('#apartado1')

const openapartado1=() => {
    apartado1.style.display='grid';

  closeapartado1();
}

const closeapartado1=() =>{
    setTimeout(()=>{
        apartado1.style.display='none';
    },3500)
}


const apartado2=document.querySelector('#apartado2')

const openapartado2=() => {
    apartado2.style.display='grid';

  closeapartado2();
}

const closeapartado2=() =>{
    setTimeout(()=>{
        apartado2.style.display='none';
    },6500)
}



const apartado3=document.querySelector('#apartado3')

const openapartado3=() => {
    apartado3.style.display='grid';

  closeapartado3();
}

const closeapartado3=() =>{
    setTimeout(()=>{
        apartado3.style.display='none';
    },9500)
}



const apartado4=document.querySelector('#apartado4')

const openapartado4=() => {
    apartado4.style.display='grid';

  closeapartado4();
}

const closeapartado4=() =>{
    setTimeout(()=>{
        apartado4.style.display='none';
    },14500)
}



const apartado5=document.querySelector('#apartado5')

const openapartado5=() => {
    apartado5.style.display='grid';

  closeapartado5();
}

const closeapartado5=() =>{
    setTimeout(()=>{
        apartado5.style.display='none';
    },14500)
}