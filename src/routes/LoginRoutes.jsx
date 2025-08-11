import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../pages'
import { PATH } from '../components'

const LoginRoutes = () => {
	return (
		<Routes>
			<Route path={PATH.home} element={<Home />} />
			<Route path={PATH.login} element={<Login />} />
			<Route path={PATH.register} element={<Register />} />
		</Routes>
	)
}

export default LoginRoutes
