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
            infoPoke.innerHTML = `<div><h2>${data.name}</h2></div>`.toUpperCase();

            const tipoPoke = document.getElementById("tipoPoke");
            tipoPoke.innerHTML = data.types.map(tipo => `<p> ${tipo.type.name}</p>`.toUpperCase()).join(" ");
            
            const statPoke = document.getElementById("statPoke");
            statPoke.innerHTML = data.stats.map(stat =>`<p>${stat.base_stat}</p>`).join(" ");

            const moves = data.moves
            const moveFilter = moves.filter((move, indice) => indice <= 10);

            const movePoke = document.getElementById("movePoke");
            movePoke.innerHTML = moveFilter.map(move => `<li>${move.move.name}</li>`).join(" ");
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}