function getpokemonName() {




    var userInput = document.getElementById('userSearch');
    document.getElementById('pokenameHTML').innerHTML = "";
    document.getElementById('pokeheightHTML').innerHTML = "";
    document.getElementById('pokePicture').src = "";
    
    
  
  
  
  
    fetch('https://pokeapi.co/api/v2/pokemon/' + userInput.value)
      .then(res => res.json())
      .then(data => {
        pokemon = data;
      })
      .then(() => {
        console.log(pokemon.stats[0].base_stat);
      })
      .then(() => {
        document.getElementById('pokenameHTML').innerHTML = pokemon.name;
        document.getElementById('pokeheightHTML').innerHTML = pokemon.height;
        document.getElementById('pokePicture').src = pokemon.sprites.front_default;
        document.getElementById('pokeHP').innerHTML = pokemon.stats[0].base_stat;
        document.getElementById('pokeAttack').innerHTML = pokemon.stats[2].base_stat;
        document.getElementById('pokeDefense').innerHTML = pokemon.stats[3].base_stat;
        document.getElementById('pokeSpeed').innerHTML = pokemon.stats[4].base_stat;
        
      })
      .catch(() => {
        alert("cant find pokemon");
      })
  
  }