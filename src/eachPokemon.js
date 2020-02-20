class Pokemon {
    static all = [] // like @@all = [] in Ruby.

    constructor(pokemon){ // like def init for Ruby
        this.name = pokemon.name // class attributes.
        this.height = pokemon.height
        this.weight = pokemon.weight
        this.abilities = pokemon.abilities // Array of strings.
        this.moves = pokemon.moves // some has moves, some dont. 
        this.stats = pokemon.stats // Array Of Hashes.
        this.types = pokemon.types
        this.sFront = pokemon.sprites.front
        this.sBack = pokemon.sprites.back
        this.id = pokemon.id
        Pokemon.all.push(this)
    }

    render(){
        let div = document.createElement("div")
        div.className = "pokemon-card"

        div.innerHTML = `
            <div class="pokemon-frame">
                <h1 class="center-text">${this.name}</h1>
                    <img data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sFront}">
                </div>
            </div>
        </div>`
        document.querySelector("#pokemon-container").appendChild(div) // the div is the created element that is being appended to the found querySelected #pokemon-container.
        div.addEventListener("click", this.flip.bind(this)) // flip function is below..?
    }
    //.bind method creates a new function that, when called, has its "this" keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

    // target = element that triggered event. 

    // currentTarget = element that has the event listener (its built IN the element after appended to parent class.)
    flip(event){
        event.currentTarget.querySelector("img").src = (
            event.currentTarget.querySelector("img").src === this.sFront ? this.sBack : this.sFront
        ) // the function above creates a "flip" event handler that handles current target, query selects the img tag.
    } // turns inside into a boolean comparison with the ? after the ===. then sets sets the src to either this.sFront or this.sBack upon each click.  
}

/* <ul class="center-text">
<li>height: ${this.height}</li>
<li>weight: ${this.weight}</li>
<li>abilities: ${this.abilities[0]}, ${this.abilities[1]}</li>
</ul> */