// Getting the Pokemons from (https://pokedex.org/)
let pokemonRepository = (function(){
    let pokemonList = [];
    let apiURL ='https://pokeapi.co/api/v2/pokemon/?limit=10';

        function add(pokemon){
        pokemonList.push(pokemon)
        }

        function getAll(){
        return pokemonList;
        }

        function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let pokemonListItem = document.createElement('li');
            
            //Creating a button for the pokemons selected
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
            return fetch(apiURL).then(function(response){
                return response.json();
            }).then(function(json){
                json.results.forEach(function(item){
                    let pokemon = {
                        name: item.name,
                        loadDetails: item.url
                    };
                    add(pokemon);
                });
            }).catch(function(e){
                console.error(e);
            })
        }

        function loadDetails(pokemon){
        //    console.log(pokemon);
            let url = pokemon.loadDetails;
            return fetch(url).then(function(response){
                return response.json();
            }).then(function(details){
                //adding the details of the pokemons
            //    console.log(details);
                pokemon.imageUrl = details.sprites.front_default;
                pokemon.height = details.height;
                pokemon.types = details.types.map(type => type.type.name);
            }).catch(function(e){
                console.error(e);
            });
        }
        
        //Setting the modal for when user clicks on the pokemon name
        let modalContainer = document.querySelector('#modal_container');

            function showPokemonModal(pokemon){
                //console.log(pokemon);
                //creating a new div for the modal container
                let modal = document.createElement('div');
                modal.classList.add('modal-container');
    
                //creating the content within the modal
                let pokemonName = document.createElement('h3');
                pokemonName.innerText = pokemon.name;
    
                let pokemonHeight = document.createElement('p');
                pokemonHeight.innerText = pokemon.height;
    
                let pokemonType = document.createElement('p');
                pokemonType.innerText = pokemon.types;
    
             /*   let pokemonImage = document.createElement('img');
                pokemonImage.innerText = pokemon.imageUrl;*/

                //creating the close button for the modal
                let closeButton = document.createElement('button');
                closeButton.classList.add('close-button');
                closeButton.innerText = 'Close';
                closeButton.addEventListener('click', hidePokemonModal);
    
                //appending the above statements to the modal container
                modal.appendChild(pokemonName);
                modal.appendChild(pokemonHeight);
                modal.appendChild(pokemonType);
            //    modal.appendChild(pokemonImage);
                modal.appendChild(closeButton);
                modalContainer.appendChild(modal);
    
                //creating a class for when to show the modal container
                modalContainer.classList.add('is-visible');
            }

            //creating the function to hide the pokemon modal
            function hidePokemonModal(){
                modalContainer.classList.remove('is-visible');
            }

            //Getting the details when a user clicks on a pokemon
        function showDetails(pokemon){
            loadDetails(pokemon).then(function(){
               showPokemonModal(pokemon);
            //   console.log(pokemon);
            });
        };

        return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showPokemonModal: showPokemonModal,
        
        };
})();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
})