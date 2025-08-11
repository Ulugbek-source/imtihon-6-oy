import { createContext, useState } from 'react'

export const Context = createContext()

export const GlobalContext = ({ children }) => {
	const [registerData, setRegisterData] = useState(null)
	return (
		<Context.Provider value={{ registerData, setRegisterData }}>
			{children}
		</Context.Provider>
	)
}
