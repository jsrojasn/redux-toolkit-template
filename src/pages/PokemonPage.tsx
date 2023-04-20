import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { retrievePokemons } from '../feature/thunks'

function PokemonsPage() {
    const { error, loading, pokemons } = useAppSelector(state => state.pokemonsState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch<any>(retrievePokemons())
    }, [dispatch])



    if (error) return <div>Error</div>

    if (loading) return <div>Loading</div>

    return (
        <div>{pokemons.map(({ name }) => <div key={name}>{name}</div>)}</div>
    )
}

export default PokemonsPage