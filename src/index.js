function generatePoem(event) {
  event.preventDefault();


 new Typewriter('.poem', {
  strings: ['Tudo vale a pena'],
  autoStart: true,
  Delay: 1,
  cursor: "",
});

 poemElement.innerHTML = "Tudo vale a pena";  
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
