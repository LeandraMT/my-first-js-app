// This will be the five Pokemons used
let pokemonList = [
    {
        name: 'Charmander', 
        height: 0.6, 
        type: 'fire'
    },
    {
        name: 'Bulbasaur', 
        height:0.6, 
        type: ['grass', 'water']
    },
    {
        name: 'Vulpix', 
        height: 0.6, 
        type: 'rock'
    },
    {
        name: 'Squirtle', 
        height: 1.5, 
        type: ['grass', 'water']
    },
    {
        name: 'Pikachu', 
        height: 0.4, 
        type: 'electric'
    }
];

//Loop 'for' with conditional statement. Leaving only the height of each pokemon and stating only 1 that is big.
for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height >= 1.5){
        document.write('<p class="squirtle">' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' - Wow that is a big Pokémon!' + '</p>')
    }else if (pokemonList[i].height === 0.6){
        document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')')// + ' - That is a medium Pokemon' + '</p>')
    }else {
        document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')')// + ' - That is a small Pokemon' + '</p>')
    }
}
