export default `
  type Ability {
    id: String,
    name: String,
    slot: Int,
    is_hidden: Boolean,
    is_main_series: Boolean,
    pokemons: [ Int ]
  }
`