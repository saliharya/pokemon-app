import Image from 'next/image'

const Pokemon = ({pokemon, index}) => {
	const pokemonIndex = ('000' + (index + 1)).slice(-3)

	return (
		<div key={index} className='m-4 py-4 flex justify-center items-center flex-col bg-slate-600 rounded-2xl'>
			<Image 
				width={150} 
				height={150} 
				alt={pokemon.name} 
				// eslint-disable-next-line quotes
				src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`} />
			<div className="font-bold text-sm text-amber-400 uppercase mt-4">
				{pokemon.name}
			</div>
		</div>
	)
}

export default Pokemon