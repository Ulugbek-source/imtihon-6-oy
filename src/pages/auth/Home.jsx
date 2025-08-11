import { useEffect } from 'react'

const Home = () => {
	useEffect(() => {
		location.pathname = '/login'
	}, [])
	return <h1>Salom</h1>
}

export default Home
