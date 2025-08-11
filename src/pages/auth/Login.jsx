import { AuthLayout } from '../../layout'
import { Button, Heading, Input, Text, PATH } from '../../components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/GlobalContext'
import { useCookies } from 'react-cookie'

const Login = () => {
	const [_cookies, setCookie] = useCookies(['token'])
	const { registerData } = useContext(Context)
	function handleLoginSubmit(e) {
		e.preventDefault()
		const data = {
			email: e.target.email.value,
			password: e.target.password.value,
		}
		if (!registerData) {
			if (data.email == 'ulugbek@gmail.com' && data.password == 'set')
				setCookie('token', data)
			location.pathname = '/'
		} else {
			if (
				data.email == registerData.email &&
				data.password == registerData.password
			)
				setCookie('token', data)
			location.pathname = '/'
		}
	}
	return (
		<AuthLayout>
			<div className='w-[350px]'>
				<Heading classList={'mb-[6px]'} type={'h2'}>
					Nice to see you!
				</Heading>
				<Text classList={'font-medium text-[#A0AEC0] mb-[35px]'}>
					Enter your email and password to sign in
				</Text>
				<form onSubmit={handleLoginSubmit} autoComplete='off'>
					<label className='mb-[24px] block'>
						<Text classList={'pl-[4.5px] mb-[4.63px]'}>Email</Text>
						<Input
							name={'email'}
							placeholder={'Your email address'}
							type={'text'}
							classList={'border-[2px] border-[#ffffff]'}
						/>
					</label>
					<label>
						<Text classList={'pl-[4.5px] mb-[4.63px]'}>Password</Text>
						<Input
							name={'password'}
							placeholder={'Your password'}
							type={'password'}
							classList={'border-[2px] border-[#ffffff]'}
						/>
					</label>
					<Button type={'submit'} classList={'mt-[30px]'}>
						SIGN IN
					</Button>
					<Text classList={'mt-[22px] text-center'}>
						Don't have an account?{' '}
						<Link to={PATH.register} className='font-bold'>
							Sign up
						</Link>
					</Text>
				</form>
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

export default Login
