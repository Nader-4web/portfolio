///////////////////// Smooth scroll to sections /////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about");
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien (rechargement de la page)
      const aboutSection = document.getElementById("about-section");
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Fait défiler la page jusqu'à la section cible avec une animation fluide
    });
  
  });

  document.addEventListener("DOMContentLoaded", function () {
    const projectsLink = document.getElementById("projects");
    projectsLink.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien (rechargement de la page)
      const projectsSection = document.getElementById("projects-section");
      projectsSection.scrollIntoView({ behavior: "smooth" }); // Fait défiler la page jusqu'à la section cible avec une animation fluide
    });
  
  });

  document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact");
    contactLink.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien (rechargement de la page)
      const contactSection = document.getElementById("contact-section");
      contactSection.scrollIntoView({ behavior: "smooth" }); // Fait défiler la page jusqu'à la section cible avec une animation fluide
    });
  
  });



////////////////////////// Scroll animation ///////////////////

let controller = new ScrollMagic.Controller();

let pokedex = new ScrollMagic.Scene({
  triggerElement:".block-projects_description"
})
.setClassToggle(".block-projects_description", "show")
.addTo(controller);



  // function fetchProjects(){
  //   fetch("./projects.json")
  //     .then((res) => res.json())
  //     .then((project)=>{
  //       console.log(project)

  //       for(p of project){
  //         document.querySelector(".block-projects").innerHTML += `

  //         <div class="block-projects_description" onClick="displayProject()">
  //           <div class="block-projects_img"><img src="${p.picture}" class="img-project" alt=""></div>
  //           <div class="block-projects_title_para">
  //               <h3 id="project-title">${p.title}</h3>
  //               <p class="block-projects_para">${p.description}</p>
  //           </div>
  //        </div>`;

  //       }
  //       displayProject(project)  
  //       closeProject()
  // })}


  function displayPokedex(){

    const pokedexProject = document.getElementById("pokedex-study")
    pokedexProject.addEventListener("click", ()=>{
    document.querySelector(".block-projects_title").innerHTML = "POKEDEX";
    document.querySelector(".block-projects_para-project").innerHTML = "This page contains the case study of Pokedex which includes the Project Overview, Tools Used and Live Links to the official product."
    document.querySelector(".img-project").src="images/img-pokedex4.png";
    document.querySelector(".block-overview_para").innerHTML = "I created this pokemon application for fun, but also for the challenge it represented. The application is quite instinctive, and allows you to search for pokemons, by their name, their number, but also by carrying out a more in-depth search using the filter. By selecting the pokemon, we display its personal file which contains its characteristics. I used the Tyradex API for this project."
    document.querySelector(".project-link").href="https://pokemon-dusky-three.vercel.app/"
    const tools = document.querySelector(".tools");
    tools.innerHTML = `
      <div class="tool">REACT</div>
      <div class="tool">VITE</div>
      <div class="tool">GIT</div>
      <div class="tool">GITHUB</div>
      <div class="tool">VERCEL</div> `
      const blockProject = document.querySelector(".project-wrapper");
      blockProject.style.display = "block";
      const body = document.body;
      body.style.overflow = "hidden";
      // document.querySelector(".project-wrapper").style.opacity = 1
    })


  }

  displayPokedex()
  
  function displayKanap(){
    const kanapProject = document.getElementById("kanap-study")
    kanapProject.addEventListener("click", ()=>{
    document.querySelector(".block-projects_title").innerHTML = "KANAP";
    document.querySelector(".block-projects_para-project").innerHTML = "This page contains the case study of Kanap which includes the Project Overview, Tools Used and Live Links to the official product."
    document.querySelector(".img-project").src="images/img-kanap-3.png";
    document.querySelector(".block-overview_para").innerHTML = "Kanap is an e-commerce site selling sofas online. I worked on the javascript part, in particular by using the backend API to display all the products available on the main page, the product page which will display the article on which the user has clicked, and will be able to choose the quantity and color of the item, the basket page, which will allow you to manage the quantity or delete an item. At the bottom of the shopping cart page, a form must be completed correctly before you can click on order, and receive a unique identifier number."
    document.querySelector(".project-link").href="https://github.com/Nader-4web/kanap"
    const tools = document.querySelector(".tools");
    tools.innerHTML = `
      <div class="tool">JAVASCRIPT</div>
      <div class="tool">GIT</div>
      <div class="tool">GITHUB</div> `
      const blockProject = document.querySelector(".project-wrapper");
      blockProject.style.display = "block"
      const body = document.body;
      body.style.overflow = "hidden"  
    })
  }

  displayKanap()

  function displayKasa(){
    const kasaProject = document.getElementById("kasa-study")
    kasaProject.addEventListener("click", ()=>{
    document.querySelector(".block-projects_title").innerHTML = "KASA";
    document.querySelector(".block-projects_para-project").innerHTML = "This page contains the case study of Kasa which includes the Project Overview, Tools Used and Live Links to the official product."
    document.querySelector(".img-project").src="images/img-kasa-4.png";
    document.querySelector(".block-overview_para").innerHTML = "Kasa is a peer-to-peer apartment rental site. This project was carried out with React and CRA. From a figma model provided, I integrate the design while respecting the desktop, tablet, and mobile format. I created the following three pages: the home page, the about page, and the apartment page. On the home page we find the different apartments that are displayed, the about page talks about the site and its different services, and the apartment page will display the selected apartment, with its description."
    document.querySelector(".project-link").href="https://kasanader.vercel.app/"
    const tools = document.querySelector(".tools");
    tools.innerHTML = `
      <div class="tool">REACT</div>
      <div class="tool">GIT</div>
      <div class="tool">GITHUB</div>
      <div class="tool">VERCEL</div> `
      const blockProject = document.querySelector(".project-wrapper");
      blockProject.style.display = "block"
      const body = document.body;
      body.style.overflow = "hidden"  
    })
  }

  displayKasa()


  function displayBooki(){
    const bookiProject = document.getElementById("booki-study")
    bookiProject.addEventListener("click", ()=>{
    document.querySelector(".block-projects_title").innerHTML = "BOOKI";
    document.querySelector(".block-projects_para-project").innerHTML = "This page contains the case study of Booki which includes the Project Overview, Tools Used and Live Links to the official product."
    document.querySelector(".img-project").src="images/img-booki-4.png";
    document.querySelector(".block-overview_para").innerHTML = "Simple integration in HTML CSS from a figma model of a responsive page (desktop, tablet, and phone) for a site which allows users to find accommodation and activities in the city of their choice."
    document.querySelector(".project-link").href="https://nader-4web.github.io/Booki/"
    const tools = document.querySelector(".tools");
    tools.innerHTML = `
      <div class="tool">HTML</div>
      <div class="tool">CSS</div>
      <div class="tool">GIT</div>
      <div class="tool">GITHUB</div> `
      const blockProject = document.querySelector(".project-wrapper");
      blockProject.style.display = "block"
      const body = document.body;
      body.style.overflow = "hidden"  
      // body.style.position = "fixed"  
    })
  }

  displayBooki()


  function closeProject() {
    const body = document.body;
    body.style.overflow = "inherit";
    const blockProject = document.querySelector(".project-wrapper");
    blockProject.style.display = "none";
  }
  
  const closeButton = document.getElementById("close-project");
  closeButton.addEventListener("click", closeProject);
  document.getElementById("close-project").addEventListener("click", closeProject);

  function displayNav(){
    const burgerButton = document.querySelector(".hamburger");
    burgerButton.addEventListener("click", ()=>{
      const nav = document.getElementById("navigation");
      nav.classList.toggle("handle-nav")
      burgerButton.classList.toggle("is-active")
      
    })
  }

  displayNav()