AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Desarrollo Web",
    cardImage: "assets/images/experience-page/software.jpg",
    place: "Espacio Digital ",
    time: "(May, 2019 - present)",
    desp: "<li>Desarrollmos tu espacio web almejor precio!<li.</li><li>",
  },
  {
    title: "Desarrolador de Blockchain",
    cardImage: "assets/images/experience-page/ethereum.jpeg",
    place: "DAPP",
    time: "(2021-present)",
    desp: "<li>Creadores de Colecciones de NFT.</li><li>Creacion del Minting DAPP.</li><li>Contratos Digitales.</li>",
  },
  {
    title: "Diseño Grafico",
    cardImage: "assets/images/experience-page/graphic.jpeg",
    place: "Remoto",
    time: "(2017-Present)",
    desp: "<li>Diseño de Logos Empresariales y mas.</li><li>Illustrator.</li><li>Photoshop.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Diseño Web fresco y moderno",
    cardImage: "assets/images/experience-page/devs.jpeg",
    description:
      "Creamos la mejor interface para tus productos.",
  },
  {
    title: "Desarrollo de DAPS en blockchain seguro",
    cardImage: "assets/images/experience-page/ethlock.jpeg",
    description:
      "Haremos tus cryptoAssets seguras.",
  },
  {
    title: "Diseño Grafico Creativo",
    cardImage: "assets/images/experience-page/graph.jpeg",
    description:
      "Creamos tus logos con tu escencia.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Ciguita",
    subtitle: "Tostadores",
    image: "assets/images/experience-page/ciguita.jpg",
    desp: ".",
  },
  {
    title: "Ñangá",
    subtitle: "Panaderia",
    image: "assets/images/experience-page/ulhacks.png",
    desp: ".",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://ciguita.org" class="blog-slider__button">Mas</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
