import { Link, useNavigate } from 'react-router-dom'
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../assets/icons'
import { Button, Heading, Input, PATH, Text } from '../../components'
import { AuthLayout } from '../../layout'
import { useContext } from 'react'
import { Context } from '../../context/GlobalContext'

const Register = () => {
	const navigate = useNavigate()
	const { setRegisterData } = useContext(Context)
	function handleRegisterSubmit(e) {
		e.preventDefault()
		const data = {
			fullname: e.target.fullname.value,
			email: e.target.email.value,
			password: e.target.password.value,
		}
		setRegisterData(data)
		navigate('/login')
	}
	return (
		<AuthLayout classList={'!pl-[55px]'}>
			<div>
				<div className='w-[452px] text-center mb-[54px]'>
					<Heading classList={'mb-[11px]'} type={'h2'}>
						Welcome!
					</Heading>
					<Text>
						Use these awesome forms to login or create new account in your
						project for free.
					</Text>
				</div>
				<div className='text-center w-[452px] border-[2px] border-[#ffffff90] rounded-[30px] pl-[48px] pb-[45px]'>
					<div className='pt-[45px] mb-[17px]'>
						<Heading type={'h3'} classList={'!text-[18px] mb-[12px]'}>
							Register with
						</Heading>
						<div className='flex items-center justify-center gap-[15px]'>
							<div className='w-[75px] cursor-pointer h-[75px] flex items-center justify-center border-[2px] border-[#ffffff] rounded-[20px]'>
								<FacebookIcon />
							</div>
							<div className='w-[75px] cursor-pointer h-[75px] flex items-center justify-center border-[2px] border-[#ffffff] rounded-[20px]'>
								<AppleIcon />
							</div>
							<div className='w-[75px] cursor-pointer h-[75px] flex items-center justify-center border-[2px] border-[#ffffff] rounded-[20px]'>
								<GoogleIcon />
							</div>
						</div>
						<Text classList={'!text-[18px] !text-[#A0AEC0]'}>or</Text>
					</div>
					<form
						onSubmit={handleRegisterSubmit}
						autoComplete='off'
						className='!text-start'
					>
						<label className='mb-[24px] block w-[350px]'>
							<Text classList={'pl-[4.5px] mb-[5px]'}>Name</Text>
							<Input
								name={'fullname'}
								placeholder={'Your full name'}
								type={'text'}
								classList={'border-[2px] border-[#ffffff]'}
							/>
						</label>
						<label className='mb-[24px] block w-[350px]'>
							<Text classList={'pl-[4.5px] mb-[5px]'}>Email</Text>
							<Input
								name={'email'}
								placeholder={'Your email address'}
								type={'text'}
								classList={'border-[2px] border-[#ffffff]'}
							/>
						</label>
						<label className='mb-[25px] block w-[350px]'>
							<Text classList={'pl-[4.5px] mb-[5px]'}>Password</Text>
							<Input
								name={'password'}
								placeholder={'Your password'}
								type={'password'}
								classList={'border-[2px] border-[#ffffff]'}
							/>
						</label>
						<Button classList={'!w-[350px]'}>SIGN UP</Button>
						<Text classList={'mt-[22px] text-center text-[#a0aec0]'}>
							Already have an account?{' '}
							<Link to={PATH.login} className='font-bold !text-white'>
								Sign in
							</Link>
						</Text>
					</form>
				</div>
				<div className='w-[450px] text-center absolute left-[61px] bottom-[20px]'>
					<Text classList={'!text-[#A0AEC0]'}>
						@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
					</Text>
					<div className='flex items-center justify-center gap-[46px] mt-[9px]'>
						<Text classList={'!text-[#A0AEC0]'}>Marketplace</Text>
						<Text classList={'!text-[#A0AEC0]'}>Blog</Text>
						<Text classList={'!text-[#A0AEC0]'}>License</Text>
					</div>
				</div>
			</div>
		</AuthLayout>
	)
}

export default Register
