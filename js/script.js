// Getting the Pokemons from (https://pokedex.org/)
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

        function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let pokemonListItem = document.createElement('li');
            let button = document.createElement('button');
                button.innerText = pokemon.name;
                button.classList.add('button-list');
                pokemonListItem.appendChild(button);
                pokemonList.appendChild(pokemonListItem);
        }

        return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
        };
})();

//uncommenting the following code as it shows 'object' within the index.html file?
//document.write(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});