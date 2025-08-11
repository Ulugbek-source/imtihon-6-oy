import { useCookies } from 'react-cookie'
import { NotificationIcon, ProfileIcon, SettingsIcon } from '../../assets/icons'
import { Input, Text } from '../../components'
import { Authors, Projects } from '../../modules'
import { useNavigate } from 'react-router-dom'

const Tables = () => {
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
		<div className=''>
			<div className='flex items-center justify-between mb-[26px] pt-[22px] pl-[24px] pr-[22px]'>
				<div>
					<Text classList={'!text-[12px] mb-[6px]'}>
						<span className='text-[#a0aec0]'>Pages</span>/ Tables
					</Text>
					<Text>Tables</Text>
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
			<Authors />
			<Projects />
			<div className='flex items-center justify-between px-[24px] mt-[20px] mb-[47px]'>
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

export default Tables
