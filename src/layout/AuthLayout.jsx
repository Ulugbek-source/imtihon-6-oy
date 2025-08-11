import { Button, Heading, Text } from '../components'
import {
	DashboardLoginIcon,
	ProfileLoginIcon,
	SignInIcon,
	SignUpIcon,
} from '../assets/icons'

const navbar = [
	{
		id: 1,
		icon: <DashboardLoginIcon />,
		title: 'DASHBOARD',
	},
	{
		id: 2,
		icon: <ProfileLoginIcon />,
		title: 'PROFILE',
	},
	{
		id: 3,
		icon: <SignUpIcon />,
		title: 'SIGN UP',
	},
	{
		id: 4,
		icon: <SignInIcon />,
		title: 'SIGN IN',
	},
]

const AuthLayout = ({ children, classList }) => {
	return (
		<div className='flex justify-between h-[100vh]'>
			<div className='w-[80%] border-[2px] border-[#ffffff] absolute top-[10px] left-[100px] px-[24px] py-[17px] rounded-[20px] flex justify-between items-center z-10 backdrop-blur-[42px] bg-white/10'>
				<Text classList='!font-medium text-white gradient-text'>
					VISION UI FREE
				</Text>
				<div className='flex items-center gap-[29px]'>
					{navbar.map(item => (
						<div
							key={item.id}
							className='flex items-center gap-[8px] text-white'
						>
							{item.icon}
							<span>{item.title}</span>
						</div>
					))}
				</div>
				<Button type={'button'} classList={'!py-[9px] !w-[150px]'}>
					Free Download
				</Button>
			</div>

			<div className='w-[50%] h-[1100px] login-bg flex flex-col items-center justify-center'>
				<Text classList={'!text-[20px] mb-[16px]'}>
					INSPIRED BY THE FUTURE:
				</Text>
				<Heading type={'h1'} classList={'gradient-text tracking-[18%]'}>
					THE VISION UI DASHBOARD
				</Heading>
			</div>

			<div
				className={`w-[50%] h-[1100px] login-right-bg flex flex-col justify-center pl-[103px] ${classList} relative`}
			>
				{children}
			</div>
		</div>
	)
}

export default AuthLayout
