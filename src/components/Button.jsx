const Button = ({ children, classList, type, onClick }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`py-[15px] bg-[#0075FF] text-[10px] cursor-pointer text-white font-bold w-full rounded-[12px] border-none ${classList}`}
		>
			{children}
		</button>
	)
}

export default Button
