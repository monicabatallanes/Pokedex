const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/pokebola.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            const infoPoke = document.getElementById("infoPoke");
            infoPoke.innerHTML = `<h2>${data.name}</h2>`.toUpperCase() + 
                    data.types.map(tipo => `<p> ${tipo.type.name}</p>`.toUpperCase()).join(" ") + 
                    data.stats.map(stat => `<p> ${stat.base_stat}</p>`).join(" ") + 
                    data.moves.map(move => `<li>${move.move.name}</li>`).join(" ");
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}