'use strict'

const coleccion = [{
        photo: "./src/img/al/al5.jpg",
        img: ["./src/img/al/al1.jpg", "./src/img/al/al2.jpg", "./src/img/al/al3.jpg", "./src/img/al/al4.jpg", "./src/img/al/al5.jpg"],
        obra: "aliens",
        cliente: "juan perez",
        descrip: "Characters desing"
    },
    {
        photo: "./src/img/axe/ax1.jpg",
        img: ["./src/img/axe/ax1.jpg", "./src/img/axe/ax2.jpg", "./src/img/axe/ax3.jpg", "./src/img/axe/ax4.jpg", "./src/img/axe/ax5.jpg"],
        obra: "hameraxe",
        cliente: "juan perez",
        descrip: "desing for NFT"
    },
    {
        photo: "./src/img/im/im1.jpg",
        img: ["./src/img/im/im1.jpg", "./src/img/im/im2.jpg", "./src/img/im/im3.jpg", "./src/img/im/im4.jpg", "./src/img/im/im5.jpg"],
        obra: "iron maiden",
        cliente: "juan perez",
        descrip: "video game characters"
    },
    {
        photo: "./src/img/itw/img1.jpg",
        img: ["./src/img/itw/img1.jpg", "./src/img/itw/img2.jpg", "./src/img/itw/img3.jpg", "./src/img/itw/img4.jpg"],
        obra: "I.T. WORKS",
        cliente: "it works",
        descrip: "3d animation for social networks"
    },
    {
        photo: "./src/img/darkontech/dk1.jpg",
        img: ["./src/img/darkontech/dk1.jpg", "./src/img/darkontech/dk2.jpg", "./src/img/darkontech/dk3.jpg", "./src/img/darkontech/dk4.jpg", "./src/img/darkontech/dk5.jpg"],
        obra: "3d tour",
        cliente: "Darkontech",
        descrip: "animation for advertising",
        web: ""
    },
    {
        photo: "./src/img/diseño/ds1.jpg",
        img: ["./src/img/diseño/ds1.jpg", "./src/img/diseño/ds2.jpg", "./src/img/diseño/ds3.jpg"],
        obra: "logo Darkontech",
        cliente: "Darkontech",
        descrip: "3D logo design"
    },

    {
        photo: "./src/img/japones/jp1.jpg",
        img: ["./src/img/japones/jp1.jpg", "./src/img/japones/jp2.jpg", "./src/img/japones/jp3.jpg", "./src/img/japones/jp4.jpg", "./src/img/japones/jp5.jpg"],
        obra: "Eyes",
        cliente: "LexaGames",
        descrip: "video game characters"
    },
    {
        photo: "./src/img/nft/nft3.png",
        img: ["./src/img/nft/nft1.png", "./src/img/nft/nft2.png", "./src/img/nft/nft3.png"],
        obra: "NFT",
        cliente: "LexaGames",
        descrip: "desing for NFT"
    },
    {
        photo: "./src/img/pacto/pk5.jpg",
        img: ["./src/img/pacto/pk1.jpg", "./src/img/pacto/pk2.jpg", "./src/img/pacto/pk3.jpg", "./src/img/pacto/pk4.jpg", "./src/img/pacto/pk5.jpg"],
        obra: "the pact",
        cliente: "LexaGames",
        descrip: "video game characters"
    },

    // {
    // photo:"",
    //     img: ["","","","",""],
    //     obra: "",
    //     cliente: "",
    //     descrip: ""
    // },


]

const galeria = document.querySelector('.le_galery')




const lista = document.getElementById('lista');


lista.addEventListener('click', (e) => {
    console.log(e.path[0].id);
    if (e.target && e.target.tagName === 'LI') {
        if (e.path[0].id == "aboutMe") {
            quienSoy()
        }
        if (e.path[0].id == "skills") {
            habilidades()
        }
        if (e.path[0].id == "works") {
            renderizarTarjetas()
        }

    }

})

// renderizar mi historia
function quienSoy() {
    galeria.innerHTML = `
    <div class="about_me"></div>
    `
    const aboutMe = document.querySelector('.about_me')

    aboutMe.innerHTML = `
    <div class="about_me">
    <div class="perfil_text">
        <p>Yo soy Alan D. Corral y tengo 26 años.</p>
        <p> mueve la curiosidad, nunca me rindo cuando hay un desafio por delante, pienso que los limites son las metas que otros alcanzaron y yo tengo que superarlas.
            <p> Siempre he sabido que la mejor forma de aprovechar un error es aprender algo de el.</p>
            <p> Nunca me conformo con un buen resultado por que sé, que siempre puede ser mejor.</p> Creo que un buen ambiente de trabajo es lo mas efectivo para que todos rindamos al máximo por eso hago todo lo posible para que el trabajo sea
            lo mas divertido posible. </p>
        <p> "una persona feliz es 100% productiva". </p>
        <p>Si estas leyendo esto es por que a vos también te mueve la curiosidad; que estas esperando? llamame ya y empecemos a trabajar juntos. &#128073; 3547 57-6162 </p>
    </div>
    <div class="perfil_img">
        <img src="./src/img/alan.png" alt="alan sadness">
    </div>
</div>
    `
}
// renderizar mis habilidades
function habilidades() {
    galeria.innerHTML = `
    <div class="skills"></div>
    `
    const skills = document.querySelector('.skills')

    skills.innerHTML = `
    <div class="skills_text">
    <p> A ver mis habilidades o "skills"; dame un lapiz y un papel o un pincel, temperas, acrilico, oleo y un lienzo o mejor una wacom o quizá una laptop o pc; hasta un pedazo de carbon y un poco de asfalto y yo voy a crear algo que no existia.</p>
    <p>
        Con un par de palitos convierto cualquier cosa en bateria.
    </p>
    <p>
        El arte brota de mis manos y mente y no logro agotarla.
    </p>
    <p>
        Pero te preguntas que instrucción academica tengo; cuando era chico mis padres me hicieron estudiar musica, artes plasticas y teatro. Cuando termine el secundario entre a la facultad de bellas artes pase dos años ahi pero empece a trabajar freelance y
        dejé la facultad pero no fue por el trabajo y es que la facu le ponia demasiados limites a mi imaginación y el trabajo siempre me dio libertad.
    </p>
    <p>
        Despreocupate, hago buen uso de todos los elementos nombrados; en lo digital empece hace relativamente poco; uso blender como programa principal para todo lo que hago pero tambien me apoyo en makehuman, photoshop, z-brush y otros.
    </p>
    <p>
        Soy diciplinado, mas alla de mi locura creativa; he trabajado como las personas normales cumpliendo horarios y siguiendo ordenes; a cambio pido un buen ambiente de trabajo y libertad para crear en lo que el trabajo nos permita.
    </p>
    <p>Si necesitas mas info, llamame o escribime al &#128073; 3547 57-6162 </p>
    <p>Gracias por tu tiempo.</p>
    </div>
    <div class="skills_img">
    <img src="./src/img/blender.png" alt="">
    </div>
    `
}


// renderizar works
function renderizarTarjetas() {

    galeria.innerHTML = `
    <div class="tarjetero"></div>
    `
    const lascards = document.querySelector('.tarjetero')

    coleccion.forEach(element => {
        lascards.innerHTML += `
<div class="alan_card">
<div class="alan_img">
<a href="http://" target="_blank" rel="noopener noreferrer">

    </a><img src="${element.photo}" alt="">
</div>
<div class="alan_text">
    <p class="obra">artwork: <b>${element.obra}</b> </p>
    <p class="cliente">client: ${element.cliente}</p>
    <p class="descrip">description: ${element.descrip}</p>
</div>

</div>
`
    });
}