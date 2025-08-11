const Heading = ({ children, type, classList }) => {
	if (type == 'h1') {
		return (
			<h1 className={`text-white text-[36px] font-bold ${classList}`}>
				{children}
			</h1>
		)
	} else if (type == 'h2') {
		return (
			<h2 className={`text-white text-[30px] font-bold ${classList}`}>
				{children}
			</h2>
		)
	} else if (type == 'h3') {
		return (
			<h3 className={`text-white text-[28px] font-bold ${classList}`}>
				{children}
			</h3>
		)
	}
}

export default Heading
