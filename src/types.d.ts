export interface Pokemon {
    name: string;
    url: string;
}

export interface Todo {
    id: string;
    name: string;
    done: boolean;
}

export interface PokemonApiResults {
    results: Pokemon[]
}