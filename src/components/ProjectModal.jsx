import Button from './Button'
import Heading from './Heading'
import Input from './Input'

const ProjectModal = ({ modalType, form, setForm, onCancel, onSave }) => {
	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
			<div className='bg-gray-900 p-6 rounded w-96'>
				<Heading type={'h3'} classList={'mb-[16px] !text-[18px]'}>
					{modalType === 'add' ? 'Add' : 'Edit'} Project
				</Heading>

				<Input
					value={form.img}
					classList={
						'mb-[12px] !py-[10px] !rounded-[5px] !bg-[#1e2939] !border-[1px] border-[#ffffff30]'
					}
					placeholder={'Image url'}
					onChange={e => setForm({ ...form, img: e.target.value })}
				/>
				<Input
					value={form.company}
					onChange={e => setForm({ ...form, company: e.target.value })}
					placeholder={'Company'}
					classList={
						'mb-[12px] !py-[10px] !rounded-[5px] !bg-[#1e2939] !border-[1px] border-[#ffffff30]'
					}
				/>
				<Input
					value={form.budget}
					onChange={e => setForm({ ...form, budget: e.target.value })}
					placeholder={'Budget'}
					classList={
						'mb-[12px] !py-[10px] !rounded-[5px] !bg-[#1e2939] !border-[1px] border-[#ffffff30]'
					}
				/>

				<select
					className='w-full mb-3 p-2 bg-[#1e2939] rounded-[5px] outline-none appearance-none'
					value={form.status}
					onChange={e => setForm({ ...form, status: e.target.value })}
				>
					<option>Working</option>
					<option>Pending</option>
					<option>Done</option>
				</select>
				<Input
					type={'number'}
					value={form.completion}
					onChange={e =>
						setForm({
							...form,
							completion: Math.max(0, Math.min(100, +e.target.value)),
						})
					}
					placeholder={'Budget'}
					classList={
						'mb-[12px] !py-[10px] !rounded-[5px] !bg-[#1e2939] !border-[1px] border-[#ffffff30]'
					}
				/>
				<div className='flex justify-end gap-[10px]'>
					<Button
						onClick={() => onCancel(null)}
						classList={'!bg-[#ffffff20] !w-[70px]'}
					>
						Cancel
					</Button>
					<Button onClick={onSave} classList={'!bg-[#155dfc] !w-[70px]'}>
						Save
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProjectModal
