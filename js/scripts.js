  // Datos básicos de las clases
  const clases = [
    {
      nro: 1,
      titulo: "Introducción a la materia, fundamentos del desarrollo web",
      pptLink: "materiales/clase01.pdf",
      relatedLinks: [
        {url: "https://www.arsys.es/blog/desarrollo-pagina-web", label: "Fases del procesor de desarrollo web"},
        {url: "materiales/clase01_terminologiaIT.pdf", label: "Conceptos y terminología IT"},
        {url: "materiales/clase01_instalacionXAMPP.pdf", label: "Instalación Servidor Local (XAMPP)"},
      ]
    },
    
    {
      nro: 2,
      titulo: "Bases de Datos MySQL",
      pptLink: "materiales/01_Intro-BBDD.pdf",
      relatedLinks: [
        {url: "materiales/02_SQL.pdf", label: "MySQL"},
        {url: "https://www.mysql.com/", label: "MySQL"},
        // {url: "https://www.uifrommars.com/que-es-wireframe/", label: "Que es un Wireframe?"},
        // {url:"https://moqups.com",label:"Moqups"},
        // {url:"https://whimsical.com",label:"Whimsical"},
        // {url:"",label:""}
      ]
    },
    
    {
      nro: 3,
      titulo: "Consultas MySQL",
      pptLink: "materiales/03_MySQL.pdf",
      relatedLinks:[
        {url:"materiales/usuarios.sql", label:"💿 bbdd prática"},      
        {url:"materiales/03_cuestionario_consultasMYSQL.pdf", label:"Ejercicios de consultas MySQL"},      
        {url:"https://docs.google.com/spreadsheets/d/17bCPEsp0wwXHMH-swX-IAE2_LdWVnDHy0ECQVYQGPC0/edit?usp=sharing", label:"Ejercicios - Respuestas"},      ]
    },
    
    {
      nro: 4,
      titulo: "Intro PHP",
      pptLink: "materiales/05_IntroduccionPHP.pdf",
      relatedLinks:[
        {url:"https://www.php.net/", label:"Documentacion PHP"},
      ]
    },
    /*
    {
      nro: 5,
      titulo: "Maquetacion y grilla - Flex",
      pptLink: "materiales/clase5_DisplayCaja.pdf",
      relatedLinks:[
        {url:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/", label:"Flexbox"},
        {url: "https://lenguajecss.com/css/grid/que-es-grid/", label:"Grid System CSS"},
        {url: "https://flexboxfroggy.com/#es", label:"Flexbox Froggy (🎮)"},
        {url: "https://codingfantasy.com/games/flexboxadventure/play", label:"Flexbox Adventura (🎮)"},
        {url: "https://cssgridgarden.com/#es", label:"Grid Garden (🎮)"},
        
      ]
    },
    {
      nro: 6,
      titulo: "Formularios - Correcciones Momento 2",
      pptLink: "materiales/clase06_Formularios.pdf",
      relatedLinks:[
        {url:"materiales/TPintegrador_momento2.pdf", label:"Guia de TP Integrador - Momento 2 "},
        {url:"https://www.palermo.edu/dyc/ciclo_asignatura/index.html", label:"Ciclo de Asignatura "},
        {url:"https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/form", label:"Formularios HTML "},
        
      ]
    },
    /*
    {
      nro: 5,
      titulo: "Responsive Design - Fonts",
      pptLink: "materiales/Clase04_2025.pdf",
      relatedLinks:[
        {url:"https://fonts.google.com/", label:"Google Fonts "},
        {url:"https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries", label:"Media queries "},
        
      ]
    },
    {
      nro: 7,
      titulo: "ResponsiveDesign - Bootstrap",
      pptLink: "materiales/clase07_ResponsiveDesign.pdf",
      relatedLinks:[
        {url:"https://getbootstrap.com/", label:"Bootstrap-Framework CSS"},
        {url:"materiales/bootstrap.ppsx", label:"Presentacion Bootstrap"},
        {url:"https://youtu.be/XAUBr0eegfQ?si=qf7YzCtRAtDtq0-R", label:"Bootstrap, Porque sí y porque no"},
        {url:"materiales/ejercicio_bootstrap.jpg", label:"Ejercicio: Maquetar con Bootstrap"},
        {url:"https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries", label:"Media queries "},        
      ]
    },
    {
      nro: 8,
      titulo: "Componentes Bootstrap - Github <i class='fa-brands fa-github-alt'></i>",
      pptLink: "materiales/clase08_Github.pdf",
      relatedLinks:[
        {url:"https://getbootstrap.com/docs/5.3/components/", label:"Componentes Bootstrap"},
        {url:"clases/clase08/ejercicioBootstrap.jpg", label:"Ejercicio Maquetacion"},
        {url:"https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf", label:"Cheat Sheet de Github"},

      ]
    },
    {
      nro: 9,
      titulo: "plugins JS",
      pptLink: "materiales/Clase09_2025_pluginsJS.pdf",
      relatedLinks:[
        {url:"https://fancyapps.com/fancybox/", label:"Fancybox"},
        {url:"https://kenwheeler.github.io/slick/", label:"Slick JS"},
        {url:"https://michalsnik.github.io/aos/", label:"AOS (Animate On Scroll)"},
        {url:"https://animate.style/", label:"Animate CSS"},
        {url:"https://swup.js.org/getting-started/installation/#esm",label:"Swup"},        
        {url:"https://www.emailjs.com/docs/sdk/installation/",label:"EmailJS"}        
      ]
    },
    {
      nro: 9,
      titulo: "Entrega Momento 3",
      pptLink: "materiales/TPintegrador_Momento3.pdf",
      relatedLinks:[
        {url:"https://desktop.github.com/download/", label:"Github Desktop"},
        {url:"https://youtu.be/sLTNgxxSBR4?si=MBq5QM120AHWVn4G", label:"Deploy en Github Pages"},
        {url:"https://youtu.be/ij0Wi7hKUgU?si=s2h3RZvPuHYu5QoU", label:"Deploy en Netlify - Cloud Hosting"},
      ]
    },
    // {
    //   nro: 3,
    //   titulo: "JavaScript: Introducción y Manipulación del DOM",
    //   pptLink: "materiales/clase3_presentacion.pptx",
    //   relatedLinks: [
    //     {url: "https://developer.mozilla.org/es/docs/Web/JavaScript", label: "MDN JavaScript"},
    //     {url: "https://www.javascript.com/", label: "JavaScript Oficial"},
    //   ]
    // },*/
  ];

  const container = document.getElementById('classes-container');

  clases.forEach(clase => {
    // Crear tarjeta
    const card = document.createElement('section');
    card.classList.add('card');

    // Título
    const h2 = document.createElement('h2');
    h2.innerHTML = `Clase ${clase.nro}: ${clase.titulo}`;
    card.appendChild(h2);

    // Link a PPT
    const pptLink = document.createElement('a');
    pptLink.href = clase.pptLink;
    pptLink.innerHTML = "Abrir Presentación de la clase (PDF)";
    pptLink.className = "presentation-link";
    pptLink.target = "_blank";
    card.appendChild(pptLink);

    // Lista de links relacionados
    if (clase.relatedLinks && clase.relatedLinks.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'related-links';
      clase.relatedLinks.forEach(linkInfo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkInfo.url;
        a.textContent = linkInfo.label;
        a.target = "_blank";
        a.className = linkInfo.highlight ? "highlight" : "";
        li.appendChild(a);
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    container.appendChild(card);
  });


  // Actualizar año en el footer
  const fechaSpan = document.getElementById('fecha');
  const currentYear = new Date().getFullYear();
  fechaSpan.textContent = currentYear;