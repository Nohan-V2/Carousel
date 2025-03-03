// Boutons
const $iconPrev = document.querySelector(".icon-prev");
const $iconNext = document.querySelector(".icon-next");

// Image
const $images = document.querySelector(".image-container");

// Textes
const $description = document.querySelector(".testimonial-text");
const $author = document.querySelector(".testimonial-author");
const $job = document.querySelector(".testimonial-position");

console.log($iconPrev);
console.log($iconNext);
console.log($images);
console.log($description);
console.log($author);
console.log($job);

let index = 0;

// Le tableau d'objets des éléments
const carouselElements = [
  {
    image: "images/image-tanya.jpg",
    description:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    author: "Tanya Sinclair",
    job: "UX Engineer",
  },
  {
    image: "images/image-john.jpg",
    description:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    author: "John Tarkpor",
    job: "Junior Front-end Developer",
  },
  {
    image: "images/master-mind.jpg",
    description:
      "“ Grâce aux cours de cuisine, j'ai pu développer mes compétences culinaires et surprendre mes proches avec des plats délicieux. L'ambiance est conviviale et les astuces des chefs sont inestimables. ”",
    author: "Mastermind",
    job: "Junior Front-end Developer",
  },
  {
    image: "images/meme-bob-eponge.png",
    description:
      "“ J'ai adoré les cours de cuisine de ce site web. Les recettes sont faciles à suivre et les conseils des chefs sont précieux. Je recommande vivement ce site à tous les amateurs de cuisine. ”",
    author: "sponge bob",
    job: "Junior Front-end Developer",
  },
];

console.log(carouselElements);

// fonction qui change les éléments en fonction de l'index
function changeElements(index) {
  if (index === 0) {
    $images.src = carouselElements[0].image;
    $description.textContent = carouselElements[0].description;
    $author.textContent = carouselElements[0].author;
    $job.textContent = carouselElements[0].job;
  } else if (index === 1) {
    $images.src = carouselElements[1].image;
    $description.textContent = carouselElements[1].description;
    $author.textContent = carouselElements[1].author;
    $job.textContent = carouselElements[1].job;
  } else if (index === 2) {
    $images.src = carouselElements[2].image;
    $description.textContent = carouselElements[2].description;
    $author.textContent = carouselElements[2].author;
    $job.textContent = carouselElements[2].job;
  } else if (index === 3) {
    $images.src = carouselElements[3].image;
    $description.textContent = carouselElements[3].description;
    $author.textContent = carouselElements[3].author;
    $job.textContent = carouselElements[3].job;
  } else {
    console.log("error");
  }
}

// preview
$iconPrev.addEventListener("click", () => {
  console.log("prev");
  index--;
  if (index < 0) {
    index = carouselElements.length - 1;
  }
  console.log(index);
  changeElements(index);
});

// next
$iconNext.addEventListener("click", () => {
  console.log("next");
  index++;
  if (index > carouselElements.length - 1) {
    index = 0;
  }
  console.log(index);
  changeElements(index);
});

// Le décompte
setInterval(() => {
  index++;
  if (index > carouselElements.length - 1) {
    index = 0;
  }
  console.log(index);
  changeElements(index);
}, 3000);

// les flêches du clavier
document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowLeft") {
    $iconPrev.click();
  } else if (event.code == "ArrowRight") {
    $iconNext.click();
  }
});
