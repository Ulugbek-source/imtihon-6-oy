const Input = ({ type, name, placeholder, classList, onChange, value }) => {
	return (
		<input
			required
			value={value}
			onChange={onChange}
			name={name}
			type={type}
			placeholder={placeholder}
			className={`py-[15px] pl-[20px] text-white rounded-[20px] w-full placeholder:text-[#A0AEC0] outline-none ${classList}`}
		/>
	)
}

export default Input
