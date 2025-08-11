const Text = ({ children, classList }) => {
	return (
		<p className={`text-[14px] font-normal text-white ${classList}`}>
			{children}
		</p>
	)
}

export default Text
