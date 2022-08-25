interface pageButtonProps {
  title : string
  pageIndex? : number
  onClick: () => Promise<void>
}

const PageButton = (props:pageButtonProps) => {

	const {pageIndex,onClick, title} = props

	return (
		<button disabled={pageIndex == 1} onClick={onClick} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
			{title}
		</button>
	)
}

export default PageButton
