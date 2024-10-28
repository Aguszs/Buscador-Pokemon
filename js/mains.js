const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.querySelector(".input-number");

const showEmptyError = () => {
  container.innerHTML = `
            <img src="./assets/img/hqdefault.jpg" alt="" class="img-error">
        <div class="pokemon-container">
            <h2 class="error-title"> Por favor, Ingresa un pokemon a buscar</h2>
        </div>
    `;
  form.reset();
};

const showError = () => {
  container.innerHTML = `
        <img src="./assets/img/error.jpeg" alt="" class="img-error">
            <div class="pokemon-container">
                <h2 class="error-title"> No existe este pokemon, busca otro</h2>
        </div>
        `;
  form.reset();
};

const div = (num) => num / 10;

const renderResult = (pokemon) => {
  const {
    name,
    height,
    weight,
    types,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
  } = pokemon;
  if (!pokemon) {
    showError();
  } else {
    container.innerHTML = `
            <img src="${front_default}" alt="" class="img-res"></img>
            <div class="pokemon-container">
                <h2 class="nombre_pokemon"> ${name.toUpperCase()}</h2>
                <h3 class="type_pokemon">${types
                  .map((typea) => typea.type.name)
                  .join(" | ")
                  .toUpperCase()}</h3>
                <div class="alturaYpeso">
                  <h3>Peso: <span class="peso_pokemon"> ${div(
                    weight
                  )} kg </span></h3>
                  <h3>Altura: <span class="altura_pokemon">${div(
                    height
                  )} mts</span></h3>
                </div>
                
                
        `;
  }
};

const submitSearch = async (e) => {
  e.preventDefault(); 
  const searchedValue = input.value.trim();
  if (!searchedValue) {
    showEmptyError();
    return;
  }
  const searchedpokemon = await requestCity(searchedValue);
  renderResult(searchedpokemon);
  form.reset();
};

const init = () => {
  form.addEventListener("submit", submitSearch);
};

init();