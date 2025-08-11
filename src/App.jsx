import { useCookies } from 'react-cookie'
import DashboardRoutes from './routes/DashboardRoutes'
import LoginRoutes from './routes/LoginRoutes'

const App = () => {
	const [cookies] = useCookies(['token'])
	return cookies.token ? <DashboardRoutes /> : <LoginRoutes />
}

export default App
