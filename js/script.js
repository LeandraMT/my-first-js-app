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
                button.addEventListener('click', function(){
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

        function loadPokemonDetails(pokemon){
            let url = pokemon.loadDetails;
            return fetch(url).then(function(response){
                return response.json();
            }).then(function(details){
                //adding the details of the pokemons
                pokemon.imageUrl = details.sprites.front_default;
                pokemon.height = details.height;
                pokemon.types = details.types.map(type => type.type.name);
            }).catch(function(e){
                console.error(e);
            });
        }
        
        //Function for the modal when user clicks on the pokemon name
        function showPokemonModal(pokemon){
            let modalContainer = document.querySelector('#modal_container');
            
            //creating a new div with the details of the pokemon for the modal container
            let modal = document.createElement('div');
            modal.classList.add('pokemon-modal');
            
            let pokemonName = document.createElement('h4');
            pokemonName.innerText = pokemon.name;

            let pokemonImage = document.createElement('img');
            pokemonImage.innerText = pokemon.imageUrl;

            let pokemonHeight = document.createElement('p');
            pokemonHeight.innerText = pokemon.height;

            let pokemonType = document.createElement('p');
            pokemonType.innerText = pokemon.types

            //the close button for the modal
            let closeButtonModal = document.createElement('button');
            closeButtonModal.classList.add('close-button');
            closeButtonModal.innerText = 'Close';

            //adding the event listener to the close button of the modal
            closeButtonModal.addEventListener("click",function(){
                location.reload()
                hidePokemonModal()
                });

    
            //appending the above statements to the modal container
            modal.appendChild(pokemonName);
            modal.appendChild(pokemonImage);
            modal.appendChild(pokemonHeight);
            modal.appendChild(pokemonType);
            modal.appendChild(closeButtonModal);
            modalContainer.appendChild(modal);
    
            //creating a class for when to show the modal container
            modalContainer.classList.add('is-visible');

            //adding event listener for when user clicks outside of the modal
            modalContainer.addEventListener('click', (e) => {
                    let target = e.target;
                    if(target === modalContainer){
                        hidePokemonModal();
                    }
                });
            }

            //creating the function to hide the pokemon modal
            function hidePokemonModal(){
                modalContainer.classList.remove('is-visible');
            }

            //adding the function for when user presses ESC to hide modal
            window.addEventListener('keydown', (e) => {
                let modalContainer = $('#modal_container');
                if(e.key === 'Escape' && modalContainer.contains('is-visible')){
                    hidePokemonModal();
                }
            })

            //Getting the details when a user clicks on a pokemon
            function showDetails(pokemon){
            loadDetails(pokemon).then(function(){
               showPokemonModal(pokemon);
            });
        };

        return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadPokemonDetails: loadPokemonDetails,
        showDetails: showDetails,
        showPokemonModal: showPokemonModal,
        
        };

});

pokemonRepository.loadPokemonDetails().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});