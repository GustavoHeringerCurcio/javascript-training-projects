const combinedStyles = {
    fire: {
        background: "linear-gradient(135deg, #4a0f0f, #7a1f1f, #a83232, #7a1f1f, #4a0f0f)",
        boxShadow: "0 0 25px rgba(200, 50, 50, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(255, 120, 120, 0.8)",
        typeColor: "#FF5555",
    },
    grass: {
        background: "linear-gradient(135deg, #0f3d0f, #1f7a1f, #4dbf4d, #1f7a1f, #0f3d0f)",
        boxShadow: "0 0 25px rgba(50, 100, 50, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(120, 255, 120, 0.8)",
        typeColor: "#32BF32",
    },
    electric: {
        background: "linear-gradient(135deg, #c8c700, #f9c300, #fcf700, #f9c300, #c8c700)",
        boxShadow: "0 0 25px rgba(255, 230, 0, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(255, 255, 120, 0.8)",
        typeColor: "#F8E71C",
    },
    water: {
        background: "linear-gradient(135deg, #1c3e8f, #2f7abf, #63aee5, #2f7abf, #1c3e8f)",
        boxShadow: "0 0 25px rgba(50, 90, 200, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(100, 150, 255, 0.8)",
        typeColor: "#4B90D2",
    },
    ground: {
        background: "linear-gradient(135deg, #6b3e2d, #8e6b4f, #b79f74, #8e6b4f, #6b3e2d)",
        boxShadow: "0 0 25px rgba(150, 100, 60, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(200, 160, 120, 0.8)",
        typeColor: "#B79F74",
    },
    rock: {
        background: "linear-gradient(135deg, #4e3e31, #7a6c52, #a08a6b, #7a6c52, #4e3e31)",
        boxShadow: "0 0 25px rgba(120, 80, 40, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(180, 150, 120, 0.8)",
        typeColor: "#A08A6B",
    },
    fairy: {
        background: "linear-gradient(135deg, #f7a6d5, #f9c6e5, #f3e2f7, #f9c6e5, #f7a6d5)",
        boxShadow: "0 0 25px rgba(240, 150, 210, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(255, 180, 230, 0.8)",
        typeColor: "#F7A6D5",
    },
    poison: {
        background: "linear-gradient(135deg, #7b467a, #a0749f, #d1a2c1, #a0749f, #7b467a)",
        boxShadow: "0 0 25px rgba(150, 100, 160, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(200, 150, 200, 0.8)",
        typeColor: "#A0749F",
    },
    bug: {
        background: "linear-gradient(135deg, #7a5b2f, #a57d46, #d0a36d, #a57d46, #7a5b2f)",
        boxShadow: "0 0 25px rgba(150, 120, 60, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(220, 180, 100, 0.8)",
        typeColor: "#D0A36D",
    },
    dragon: {
        background: "linear-gradient(135deg, #1a3e6b, #2b6990, #557ea9, #2b6990, #1a3e6b)",
        boxShadow: "0 0 25px rgba(30, 70, 150, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(100, 150, 255, 0.8)",
        typeColor: "#557EA9",
    },
    psychic: {
        background: "linear-gradient(135deg, #8b4767, #a97c99, #d1a9c3, #a97c99, #8b4767)",
        boxShadow: "0 0 25px rgba(140, 70, 100, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(200, 140, 150, 0.8)",
        typeColor: "#A97C99",
    },
    flying: {
        background: "linear-gradient(135deg, #87c6f3, #aad9f4, #cce1f6, #aad9f4, #87c6f3)",
        boxShadow: "0 0 25px rgba(100, 200, 255, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(160, 220, 255, 0.8)",
        typeColor: "#55B0CC",
    },
    fighting: {
        background: "linear-gradient(135deg, #9b4e3c, #be6e52, #e07c68, #be6e52, #9b4e3c)",
        boxShadow: "0 0 25px rgba(180, 80, 50, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(255, 140, 100, 0.8)",
        typeColor: "#E07C68",
    },
    normal: {
        background: "linear-gradient(135deg, #a8a8a8, #bcbcbc, #d0d0d0, #bcbcbc, #a8a8a8)",
        boxShadow: "0 0 25px rgba(150, 150, 150, 0.55), inset 0 0 20px rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(220, 220, 220, 0.8)",
        typeColor: "#D0D0D0",
    }
};

const pokeContainer = document.querySelector('#pokeContainer');
const pageSize = 40;
let nextPokemon = 1;
const maxPokemon = 1300;
const loadedPokemonIds = new Set();
const mainTypes = Object.keys(combinedStyles);

// Função para carregar Pokémon
const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    createPokemonCard(data);
};

// Função para obter o tipo principal
function getMainType(poke) {
    const pokeTypes = poke.types.map(t => t.type.name);
    return mainTypes.find(type => pokeTypes.indexOf(type) > -1);
}

// Função para criar o card
const createPokemonCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add('pokemon');

    const name = poke.name[0].toUpperCase() + poke.name.slice(1);
    const id = poke.id.toString().padStart(3, "0");
    const type = getMainType(poke);
    const style = combinedStyles[type] || combinedStyles.normal;

    card.innerHTML = `
        <div class="imgContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png" alt="${name}"
            onerror="this.src='https://via.placeholder.com/96?text=No+Image'">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: ${type}</small>
        </div>
    `;

    card.style.background = style.background;
    card.style.boxShadow = style.boxShadow;
    card.style.border = style.border;
    card.querySelector('.type').style.color = style.typeColor;
    card.querySelector('.number').style.color = style.typeColor;

    pokeContainer.appendChild(card);
};

// Função para carregar mais Pokémon
async function loadMorePokemons() {
    const start = nextPokemon;
    const end = Math.min(nextPokemon + pageSize - 1, maxPokemon);

    for (let i = start; i <= end; i++) {
        if (!loadedPokemonIds.has(i)) {
            loadedPokemonIds.add(i);
            try {
                await getPokemons(i);
                loadedPokemonIds.add(i);
            } catch (err) {
                console.warn(`Pokémon ${i} não pôde ser carregado.`, err);
            }
        }
    }

    nextPokemon = end + 1;

    if (nextPokemon > maxPokemon) {
        const loadBtn = document.getElementById('loadMore');
        loadBtn.disabled = true;
        loadBtn.innerText = "All Pokémon Loaded";
    }
}

// Botão de carregar mais
document.getElementById('loadMore').addEventListener('click', loadMorePokemons);

// Carrega os primeiros Pokémon
loadMorePokemons();
