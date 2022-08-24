import Link from 'next/link'

interface menuProps {
    href:string;
    title:string
}

export default function Menu(props:menuProps) {

	const {href, title} = props

	return (
		<li className="group">
			<Link href={href}>
				<a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{title}</a>
			</Link>
		</li>
	)
}
