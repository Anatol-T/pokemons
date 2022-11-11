export interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface Ability {
  slot: number
  ability: {
    name: string
    url: string
  }
}

export interface Pokemon {
  id: number
  name: string
  types: Type[]
  abilities: Ability[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  height: number
  weight: number
  base_experience: number
}

export interface Result {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: Result[]
}

export interface PokemonListData {
  pokemonsChunk: Pokemon[]
  offset: number
  limit: number
  totalCount: number
}
