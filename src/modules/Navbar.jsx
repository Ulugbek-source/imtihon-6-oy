import { NavLink } from 'react-router-dom'
import {
	BillingIcon,
	DashboardIcon,
	RtlIcon,
	TablesIcon,
} from '../assets/icons'
import { PATH, Text } from '../components'

const Navbar = () => {
	const navbar = [
		{
			id: 1,
			title: 'Dashboard',
			icon: <DashboardIcon />,
			path: PATH.home,
		},
		{
			id: 2,
			title: 'Tables',
			icon: <TablesIcon />,
			path: PATH.tables,
		},
		{
			id: 3,
			title: 'Billing',
			icon: <BillingIcon />,
			path: PATH.billing,
		},
		{
			id: 4,
			title: 'RTL',
			icon: <RtlIcon />,
			path: PATH.rtl,
		},
	]
	return (
		<div className='w-[25%] h-[100vh] bg-[#050c28] py-[10px] pl-[10px]'>
			<div className='pt-[36px] text-center'>
				<Text classList={'tracking-[3px] mb-[31px]'}>VISION UI FREE</Text>
				<div className='w-[233px] mx-auto element'></div>
			</div>
			<nav className='flex flex-col gap-[13px] pl-[22px] mt-[34px]'>
				{navbar.map(item => (
					<div
						key={item.id}
						className='flex gap-[15px] items-center pt-[11px] pb-[13px] pl-[16px]'
					>
						<div className='w-[30px] h-[30px] rounded-[12px] flex items-center justify-center'>
							{item.icon}
						</div>
						<NavLink to={item.path} className='text-white'>
							{item.title}
						</NavLink>
					</div>
				))}
			</nav>
		</div>
	)
}

export default Navbar
