import { GetStaticProps } from 'next'
import { useState } from 'react'
import HeaderSection from '../components/organism/HeaderSection'

type InitialPokemonProps = {
	initialPokemon : {
		count : number
		next : string
		previous : null
		results : [{
			name : string
			url : string
		}]
	}
}

export default function Home(props : InitialPokemonProps) {
	const { initialPokemon } = props
	const [pokemon, setPokemon] = useState(initialPokemon)

	return (
		<>
			<HeaderSection />
			<div>
				{pokemon.results.map((character, index) =>(
					<div key={index}>
						{character.name}
					</div>
				))}
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon')
	const initialPokemon = await response.json()

	return {
		props: {
			initialPokemon
		}
	}
}