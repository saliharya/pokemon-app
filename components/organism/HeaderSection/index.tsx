import HamburgerButton from '../../molecules/HamburgerButton'
import Menu from './Menu'

export default function HeaderSection() {
	return (
		<header className="fixed bg-slate-900 top-0 left-0 w-full flex items-center z-50">
			<div className="container">
				<div className="flex items-center justify-between relative">
					<div className="px-4">
						<a href="#home" className="text-bold text-lg text-primary block py-6">PokeDEX</a>
					</div>
					<div className="flex items-center px-4">
						<HamburgerButton />
						<nav id="nav-menu"
							className="hidden absolute py-5 bg-white shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
							<ul className="block lg:flex">
								<Menu href='#home' title='Home'/>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}