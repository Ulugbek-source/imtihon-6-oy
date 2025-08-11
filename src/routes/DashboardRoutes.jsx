import { Route, Routes } from 'react-router-dom'
import { Billing, DashboardHome, Rtl, Tables } from '../pages'
import { PATH } from '../components'
import Navbar from '../modules/Navbar'

const DashboardRoutes = () => {
	return (
		<div className='flex'>
			<Navbar />
			<div className='dashboard-bg w-full overflow-x-hidden overflow-y-auto h-screen'>
				<Routes>
					<Route path={PATH.home} element={<DashboardHome />} />
					<Route path={PATH.tables} element={<Tables />} />
					<Route path={PATH.billing} element={<Billing />} />
					<Route path={PATH.rtl} element={<Rtl />} />
				</Routes>
			</div>
		</div>
	)
}

export default DashboardRoutes
