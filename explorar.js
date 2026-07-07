
const prompt = require("prompt-sync")();

async function obtenerPokemon() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  console.log(respuesta);

  const datos = await respuesta.json();
  console.log(datos.name, datos.id, datos.weight, datos.types, datos.stats, datos.abilities);

  for(i=0; i<datos.types.length; i++){
    console.log(datos.types[i].type.name);
  }

  for(i=0; i<datos.stats.length; i++){
    console.log(datos.stats[i].stat.name);
    console.log(datos.stats[i].base_stat);
    }

for(i=0; i<datos.abilities; i++){
    console.log(datos.abilities[i].ability.name);
}

}
pokedex();