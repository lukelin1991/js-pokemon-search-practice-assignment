document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  document.querySelector("center").remove()
  //YOUR CODE HERE

// Deliverables
//   Implement a filter functionality for your Pokemon list.
//   Implement a flip functionality on each Pokemon.
//   Your search should include pokemon whose names are not exact matches
//   AS A BONUS, add a way to show users details for a particular pokemon: moves, abilities, etc.


  // POKEMON = pokemon array, lowercase pokemon is each pokemon instance.
  POKEMON.forEach(pokemon => {
    let pokemonObj = new Pokemon(pokemon) // calls the Pokemon class (from eachPokemon.js) to create based on input pokemon.
    pokemonObj.render()
  })
  document.querySelector("#pokemon-search-input").addEventListener("keyup", keyPressHandler)
})

function keyPressHandler(event){
  let pokeContainerEl = document.querySelector("#pokemon-container")
  pokemonContainerEl.innerHTML = "" //puts the returned value as a string with HTML tags etc.
  let searchTerm = event.currentTarget.value // finds the value based on whats typed in.
  let filteredPokemon = Pokemon.all.filter(pokemon => pokemon.name.includes(searchTerm)) 
  // above gets all pokemon name that INCLUDES the searched term typed in. and filters as such.
  filteredPokemon.forEach(pokemon => { // filters EACH pokemon using .forEach function
    pokemon.render() // renders each available pokemon accordingly.
  })

}



  // const pokemonContainer = document.querySelector("#pokemon-container") // # = id, . = class. REMEMBER THAT
  // // goes through each list item, and makes each card div shit.
  // function renderPokeListItem(poke){
  //   // 1. Create the DOM node
  //   let pokeCardDiv = document.createElement("div")
  //   // 2. Add className
  //   pokeCardDiv.className = "pokemon-card"
  //   // --------- innerHTML the pokeCardDiv shit thing.
  //   pokeCardDiv.innerHTML = `
  //     <div class="pokemon-frame">
  //       <h1 class="center-text">${poke.name}</h1>
  //       <div class="pokemon-image">
  //         <img data-id="${poke.id}" data-action="flip" class="toggle-sprite" src="${poke.sprites.front}"
  //       </div>
  //     </div>
  //   `
  // }

  // function renderPokeList(POKEMON){
  //   return POKEMON.forEach(function(poke){
  //     const pokeCardDiv = document.createElement("div")
  //     // 2. Add className
  //     pokeCardDiv.className = "pokemon-card"
  //     // --------- innerHTML the pokeCardDiv shit thing.
  //     pokeCardDiv.innerHTML = `
  //       <div class="pokemon-frame">
  //         <h1 class="center-text">${poke.name}</h1>
  //         <div class="pokemon-image">
  //           <img data-id="${poke.id}" data-action="flip" class="toggle-sprite" src="${poke.sprites.front}"
  //         </div>
  //       </div>
  //     `
  //   })
  // }
  // // renderPokeList is defined WAYY BELOWWW. and called up here..
  // pokemonContainer.append(renderPokeList(POKEMON))

  // console.log(pokemonContainer.append(renderPokeList(POKEMON)))
  // console.log(pokemonContainer)  
