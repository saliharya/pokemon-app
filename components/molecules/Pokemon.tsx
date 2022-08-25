import Image from 'next/image'

const Pokemon = ({pokemon, index}) => {
	const pokemonIndex = ('000' + (index + 1)).slice(-3)

	return (
		<div key={index} className='m-4 w-72'>
			<Image 
				width={150} 
				height={150} 
				alt={pokemon.name} 
				src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+pokemonIndex+'.png'} />
			{pokemon.name}
		</div>
	)
}

export default Pokemon