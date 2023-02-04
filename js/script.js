// This will be the five Pokemons used
// IIFE
let pokemonRepository = (function(){
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
    ]

    function add(pokemon){
        pokemonList.push(pokemon);
    }

    function getAll(){
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

// forEach Loop
pokemonList.forEach(function(pokemon){
    document.write(pokemon.name + ' (height:' + pokemon.height + ')');
});

pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name + pokemon.height);
});

/* before forEach Loop
for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height >= 1.5){
        document.write('<p class="squirtle">' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' - Wow that is a big Pokémon!' + '</p>')
    }else if (pokemonList[i].height === 0.6){
        document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')')// + ' - That is a medium Pokemon' + '</p>')
    }else {
        document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')')// + ' - That is a small Pokemon' + '</p>')
    }
}
*/
