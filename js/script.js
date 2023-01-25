// This will be the five Pokemons used
let pokemonList = [
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Bulbasaur', height:0.6, type: ['grass', 'water']},
    {name: 'Vulpix', height: 0.6, type: 'rock'},
    {name: 'Squirtle', height: 1.5, type: ['grass', 'water']},
    {name: 'Pikachu', height: 0.4, type: 'electric'}
];

//Loop 'for' is used
for (let index = 0; index < pokemonList.length; index++){
    if (pokemonList[i].height >= 1.5){
        document.write(pokemonList[i].name + '(height:' + pokemonList[i].height + 'Wow, that is a big pokemon!' + '<br>');
    } else if (pokemonList[i].height == 0.6){
        document.write(pokemonList[i].name + '(height:' + pokemonList[i].height + 'That is a medium Pokemon' + '<br>');
    } else {
        document.write(pokemonList[i].name + '(height:' + pokemonList[i].height + 'That is a small Pokemon' + '<br>');
    }
}
