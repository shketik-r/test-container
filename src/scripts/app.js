




let answersAccordion = document.querySelectorAll(".answers-accordion__btn");

function accordion(acc) {
  acc.forEach(element => {
    element.addEventListener("click", () => {
      acc.forEach(el => {
        el.querySelector("ul").classList.remove("active")
        el.querySelector("svg").classList.remove("active-svg")
      })
      element.querySelector("ul").classList.add("active")
      element.querySelector("svg").classList.add("active-svg")
    })
  });
}



if (answersAccordion) {
  accordion(answersAccordion)
}

