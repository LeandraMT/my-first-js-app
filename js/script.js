// Getting the Pokemons from (https://pokedex.org/)
let pokemonRepository = (function(){
    let pokemonList = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        function add(pokemon){
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon //&&
        //    'detailsUrl' in pokemon
        //  'height' in pokemon &&
        //    'type' in pokemon 
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('Pokemon is not correct');
        }
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

                //Adding event listener to button & event handler
                button.addEventListener('click', function(event){
                    showDetails(pokemon);
                })
        }

        //Adding the two functions loadList and loadDetails for the pokemon api
        function loadList(){
            return fetch(apiURL, {
                method: 'GET'
            }).then(function(response){
                return response.json();
            }).then(function(json){
                json.results.forEach(function(item){
                    let pokemon = {
                        name: item.name,
                        loadDetails: item.url
                    };
                    add(pokemon);
                    console.log(pokemon);
                });
            }).catch(function(e){
                console.error(e);
            })
        }

        function loadDetails(item){
    //    let url = item.detailsURL;
            fetch(apiUrl, {
                method: 'GET'
            }).then(function(response){
                return response.json();
            }).then(function(details){
                //adding the details of the pokemons
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            }).catch(function(e){
                console.error(e);
            });
        }

        //Getting the details when a user clicks on a pokemon
        function showDetails(pokemon){
            loadDetails(pokemon).then(function(){
                console.log(pokemon);
            });
        }

        return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
        };
})();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
})