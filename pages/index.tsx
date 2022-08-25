import axios from 'axios'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import PageButton from '../components/molecules/PageButton'
import Pokemon from '../components/molecules/Pokemon'
import HeaderSection from '../components/organism/HeaderSection'

const Home = ({initialPokemon}) => {

	console.log(initialPokemon)

	const [pokemon, setPokemon] = useState(initialPokemon)
	const [offset, setOffset] = useState(0)
	const pageIndex = (offset / 20) + 1
	console.log('offset saat ini adalah ' + offset)

	const fetchPokemon = async (url, next) => {
		const response = await axios.get(url)
		const nextPokemon = response.data

		setOffset(next ? offset + 20 : offset - 20)
		setPokemon(nextPokemon)
	}

	const prevButtonHandler = () => fetchPokemon(pokemon.previous, false)
	const nextButtonHandler = () => fetchPokemon(pokemon.next, true)

	return (
		<>
			<HeaderSection />
			<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-24 container w-2/3 md:w-full lg:w-full'>
				{pokemon.results.map((character, index) => (
					<Pokemon key={index} pokemon={character} index={index + offset}/>
				))}
			</div>
			<div className="flex flex-col items-center my-8">
				<div className="text-sm text-gray-700 dark:text-gray-400">Showing Page <span className="font-semibold text-gray-900 dark:text-white">{pageIndex}</span></div>
				<div className="md:inline-flex lg:inline-flex mt-2 xs:mt-0 hidden">
					<PageButton title='Prev' pageIndex={pageIndex} onClick={prevButtonHandler}/>
					<PageButton title='Next' onClick={nextButtonHandler}/>
				</div>
			</div>
			<div className="fixed z-90 bottom-1/2 lg:hidden md:hidden">
				<PageButton title='Prev' pageIndex={pageIndex} onClick={prevButtonHandler} />
			</div>
			<div className="fixed z-90 right-0 bottom-1/2 lg:hidden md:hidden">
				<PageButton title='Next' onClick={nextButtonHandler} />
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