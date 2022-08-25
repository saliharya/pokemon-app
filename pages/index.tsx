import axios from 'axios'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import Pokemon from '../components/molecules/Pokemon'
import HeaderSection from '../components/organism/HeaderSection'

const Home = ({initialPokemon}) => {

	const [pokemon, setPokemon] = useState(initialPokemon)
	const [offset, setOffset] = useState(0)

	const fetchPokemon = async (url, next) => {
		const response = await axios.get(url)
		const nextPokemon = response.data

		setOffset(next ? offset + 20 : offset - 20)
		setPokemon(nextPokemon)
	}

	const pageIndex = (offset / 20) + 1

	return (
		<>
			<HeaderSection />
			<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-24 container'>
				{pokemon.results.map((character, index) => (
					<Pokemon key={index} pokemon={character} index={index + offset}/>
				))}
			</div>
			<div className="flex flex-col items-center my-8">
				<span className="text-sm text-gray-700 dark:text-gray-400">Showing Page <span className="font-semibold text-gray-900 dark:text-white">{pageIndex}</span></span>
				<div className="inline-flex mt-2 xs:mt-0">
					<button onClick={() => fetchPokemon(pokemon.previous, false)} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Prev
					</button>
					<button onClick={() => fetchPokemon(pokemon.next, true)} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Next
					</button>
				</div>
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