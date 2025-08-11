import { Text } from '../../components'
import { Authors, Projects } from '../../modules'

const Tables = () => {
	return (
		<div>
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
