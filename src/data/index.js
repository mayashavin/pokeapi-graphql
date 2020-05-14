import gql from 'graphql-tag';
import Ability from './Ability';
import Color from './Color';
import Form from './Form';
import Height from './Height';
import HeldItem from './HeldItem';
import Move from './Move';
import Pokemon from './Pokemon';
import Species from './Species';
import Sprite from './Sprite';
import Stat from './Stat';
import Type from './Type';
import GameIndex from './GameIndex';
import Weight from './Weight';

const typeDefs =gql`
  type Query {
    pokemons(limit: Int!, offset: Int!): PokemonList
    pokemon(id: ID!): Pokemon
  }

  type Mutation {
    sayHello(name: String!): String!
  }

  type PokemonList {
    count: Int
    next: String
    previous: String
    results: [Pokemon]
  }

  ${Ability}
  ${Color}
  ${Form}
  ${Height}
  ${HeldItem}
  ${Move}
  ${Pokemon}
  ${Species}
  ${Sprite}
  ${Stat}
  ${Type}
  ${Weight}
  ${GameIndex}
`;

export default typeDefs;
