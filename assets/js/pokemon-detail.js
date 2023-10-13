const pokemonDetail = document.getElementById('pokemonDetail');

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        getDetail(pokemonId);
    }
});

function convertPokemonToDetail(pokemon) {
    return `
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">                                    
        <h2>Nome do Pokémon: <span id="pokemon-name">${pokemon.name}</span></h2>
        <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
        </ol>        
        <p>Altura: <span id="pokemon-height">${pokemon.height}</span></p>
        <p>Peso: <span id="pokemon-weight">${pokemon.weight}</span></p>
    `;
}

function getDetail(id) {
    pokeApi.getDetail(id).then((pokemon) => {
        const newHtml = convertPokemonToDetail(pokemon);
        pokemonDetail.innerHTML = newHtml; // Usar '=' em vez de '+=' para substituir o conteúdo existente
    });
}
