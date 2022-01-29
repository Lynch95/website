const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

window.onload = function () {
  const poke = document.getElementById("pokemon");
  fetch(url)
    .then((response) => response.json())
    .then((data) => (poke.innerHTML = "<h1>" + data["species"]["name"])) +
    "</h1>";
};
