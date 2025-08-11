import Button from './Button'
import Heading from './Heading'
import Input from './Input'

const AuthorModal = ({
	isOpen,
	onClose,
	onSave,
	formData,
	setFormData,
	modalType,
}) => {
	if (!isOpen) return null
	return (
		<div className='fixed inset-0 bg-black/85 flex justify-center items-center'>
			<div className='bg-[#051c50] p-6 rounded-lg w-96'>
				<Heading type={'h2'} classList={'!text-[18px] mb-[10px]'}>
					{modalType === 'add' ? 'Add Author' : 'Edit Author'}
				</Heading>
				<form className='space-y-[15px] mb-[20px]'>
					<Input
						type={'text'}
						placeholder={'Image URL'}
						value={formData.img}
						onChange={e => setFormData({ ...formData, img: e.target.value })}
						classList={
							'w-full text-white !py-[10px] !pl-[8px] border-[1px] border-[#ffffff80] !rounded-[5px]'
						}
					/>
					<Input
						type={'text'}
						placeholder={'Enter name'}
						value={formData.name}
						onChange={e => setFormData({ ...formData, name: e.target.value })}
						classList={
							'w-full text-white !py-[10px] !pl-[8px] border-[1px] border-[#ffffff80] !rounded-[5px]'
						}
					/>
					<Input
						type={'text'}
						placeholder={'Enter email'}
						value={formData.email}
						onChange={e => setFormData({ ...formData, email: e.target.value })}
						classList={
							'w-full text-white !py-[10px] !pl-[8px] border-[1px] border-[#ffffff80] !rounded-[5px]'
						}
					/>
					<Input
						type={'text'}
						placeholder={'Enter function'}
						value={formData.function}
						onChange={e =>
							setFormData({ ...formData, function: e.target.value })
						}
						classList={
							'w-full text-white !py-[10px] !pl-[8px] border-[1px] border-[#ffffff80] !rounded-[5px]'
						}
					/>
				</form>
				<div className='flex justify-end gap-[10px]'>
					<Button
						onClick={() => onClose(false)}
						classList={
							'!w-[90px] py-[14px] !bg-red-500 !text-[11px] rounded-[12px]'
						}
					>
						Cancel
					</Button>
					<Button
						onClick={onSave}
						classList={
							'!w-[90px] py-[14px] !bg-[#0075ff] !text-[11px] rounded-[12px]'
						}
					>
						Save
					</Button>
				</div>
			</div>
		</div>
	)
}

export default AuthorModal
