const Pokemon = `
  type Pokemon {
    id: Int!
    name: String!
    base_experience: Int
    color: Color!
    height: Height
    is_default: Boolean
    order: Int
    weight: Weight
    abilities: [AbilityInfo]
    forms: [Form]
    held_items: [HeldItem]
    location_area_encounters: String
    moves: [Move]
    sprites: Sprite
    species: SpeciesInfo
    stats: [Stat]
    types: [Type]
    avatar: String!
  }

  type AbilityInfo {
    name: String,
    slot: Int,
  }

  type SpeciesInfo {
    name: String!
    url: String!
  }
`;

export default Pokemon;