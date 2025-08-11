import { NotificationIcon, ProfileIcon, SettingsIcon } from '../../assets/icons'
import {
	Dashboard1,
	Dashboard10,
	Dashboard11,
	Dashboard2,
	Dashboard3,
	Dashboard4,
	Dashboard5,
	Dashboard6,
	Dashboard7,
	Dashboard8,
	Dashboard9,
} from '../../assets/images'
import { Input, Text } from '../../components'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
const Home = () => {
	const [_cookies, removeCookies] = useCookies(['token'])
	const navigate = useNavigate()
	function handleLogout(e) {
		e.preventDefault()
		const isConfirmed = confirm('Do you want to leave?')
		if (isConfirmed) {
			removeCookies('token')
			navigate('/login')
		}
	}
	return (
		<div className='pb-[37px] pt-[22px] pl-[24px] pr-[24px]'>
			<div className=''>
				<div className='flex items-center justify-between mb-[26px]'>
					<div>
						<Text classList={'!text-[12px] mb-[6px]'}>
							<span className='text-[#a0aec0]'>Pages</span>/ Dashboard
						</Text>
						<Text>Dashboard</Text>
					</div>
					<div className='flex items-center gap-[18px]'>
						<Input
							type={'text'}
							placeholder={'Type here...'}
							classList={
								'bg-[#0F1535] !w-[200px] !py-[10px] rounded-[15px] border-[0.5px] border-[#ffffff30]'
							}
						/>
						<div
							onClick={handleLogout}
							className='flex items-center cursor-pointer gap-[4px] text-[#718096]'
						>
							<ProfileIcon />
							Sign In
						</div>
						<SettingsIcon />
						<NotificationIcon />
					</div>
				</div>
			</div>
			<div>
				<div className='flex gap-[24px] items-center mb-[23px]'>
					<img className='w-[245px]' src={Dashboard1} alt='Dashboard image' />
					<img className='w-[245px]' src={Dashboard2} alt='Dashboard image' />
					<img className='w-[245px]' src={Dashboard3} alt='Dashboard image' />
					<img className='w-[245px]' src={Dashboard4} alt='Dashboard image' />
				</div>
				<div className='flex  items-center gap-[24px] mb-[23px]'>
					<img
						className='w-[415px] h-[224px]'
						src={Dashboard5}
						alt='Dashboard image'
					/>
					<img
						className='w-[415px] h-[224px]'
						src={Dashboard6}
						alt='Dashboard image'
					/>
					<img
						className='w-[415px] h-[224px]'
						src={Dashboard7}
						alt='Dashboard image'
					/>
				</div>
				<div className='flex  items-center gap-[24px] mb-[23px]'>
					<img
						className='w-[600px] h-[224px]'
						src={Dashboard8}
						alt='Dashboard image'
					/>
					<img
						className='w-[600px] h-[224px]'
						src={Dashboard9}
						alt='Dashboard image'
					/>
				</div>
				<div className='flex  items-center gap-[24px]'>
					<img
						className='w-[600px] h-[224px]'
						src={Dashboard10}
						alt='Dashboard image'
					/>
					<img
						className='w-[600px] h-[224px]'
						src={Dashboard11}
						alt='Dashboard image'
					/>
				</div>
			</div>
			<div className='flex items-center justify-between px-[24px] mt-[20px] mb-[40px]'>
				<Text>
					@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
				</Text>
				<div className='flex items-center gap-[46px]'>
					<Text>Marketplace</Text>
					<Text>Blog</Text>
					<Text>License</Text>
				</div>
			</div>
		</div>
	)
}

export default Home
