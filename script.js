document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.querySelector(".fetchBtn");
  const renderHeroes = document.querySelector("ul");

  fetchBtn.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.results
          .map((hero) => {
            return {
              name: hero.name,
              gender: hero.gender,
              planetLink: hero.homeworld,
            };
          })
          .forEach((element) => {
            const heroRow = document.createElement("li");
            heroRow.innerHTML = `<p>Name Of Hero: <b>${element.name}</b> - Gender: <b>${element.gender}</b> </p>`;
            heroRow.addEventListener("click", () => {
              console.log(element.planetLink);
              fetch(element.planetLink)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                });
            });
            renderHeroes.appendChild(heroRow);
          });
      });
  });
});
