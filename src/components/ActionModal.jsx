import Button from './Button'
import Heading from './Heading'

const SelectedItem = ({ selectedItem, onEdit, onDelete, onCancel }) => {
	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
			<div className='bg-gray-900 p-6 rounded-lg w-80'>
				<Heading type={'h3'} classList={'mb-[16px] !text-[18px]'}>
					Actions for {selectedItem.company}
				</Heading>
				<div className='flex justify-end gap-[12px]'>
					<Button
						classList={'!bg-[#155dfc] !w-[70px]'}
						onClick={() => onEdit(selectedItem)}
					>
						Edit
					</Button>
					<Button
						classList={'!bg-red-500 !w-[70px]'}
						onClick={() => onDelete(selectedItem.id)}
					>
						Delete
					</Button>
					<Button classList={'!bg-gray-500 !w-[70px]'} onClick={onCancel}>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SelectedItem
