import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { Input, Text } from '../../components'
import { NotificationIcon, ProfileIcon, SettingsIcon } from '../../assets/icons'

const Rtl = () => {
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
		<div className='pt-[22px] pl-[24px] pr-[40px]'>
			<div className='flex items-center justify-between mb-[26px]'>
				<div>
					<Text classList={'!text-[12px] mb-[6px]'}>
						<span className='text-[#a0aec0]'>Pages</span>/ Rtl
					</Text>
					<Text>Rtl</Text>
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
	)
}

export default Rtl
