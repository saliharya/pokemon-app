import axios from 'axios'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import Pokemon from '../components/molecules/Pokemon'
import HeaderSection from '../components/organism/HeaderSection'

const Home = ({initialPokemon}) => {
	const [pokemon, setPokemon] = useState(initialPokemon)

	return (
		<>
			<HeaderSection />
			<div className='flex flex-wrap items-center justify-center container'>
				{pokemon.results.map((character, index) => (
					<Pokemon key={index} pokemon={character} index={index}/>
				))}
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
	const initialPokemon = response.data

	return {
		props: {
			initialPokemon
		}
	}
}

export default Home