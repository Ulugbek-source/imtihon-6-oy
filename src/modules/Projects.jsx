import { useState, useEffect } from 'react'
import {
	Check,
	Projects1,
	Projects2,
	Projects3,
	Projects4,
	Projects5,
} from '../assets/images'
import { DotsIcon } from '../assets/icons'
import { ActionModal, Button, Heading, ProjectModal, Text } from '../components'

const defaultProjects = [
	{
		id: 1,
		img: Projects1,
		company: 'Chakra Soft UI Version',
		budget: '$14,000',
		status: 'Working',
		completion: 60,
		creatorId: 1,
	},
	{
		id: 2,
		img: Projects2,
		company: 'Add Progress Track',
		budget: '$3,000',
		status: 'Canceled',
		completion: 10,
		creatorId: 2,
	},
	{
		id: 3,
		img: Projects3,
		company: 'Fix Platform Errors',
		budget: 'Not set',
		status: 'Done',
		completion: 100,
		creatorId: 3,
	},
	{
		id: 4,
		img: Projects4,
		company: 'Launch our Mobile App',
		budget: '$32,000',
		status: 'Done',
		completion: 100,
		creatorId: 4,
	},
	{
		id: 5,
		img: Projects5,
		company: 'Add the New Pricing Page',
		budget: '$400',
		status: 'Working',
		completion: 25,
		creatorId: 5,
	},
]
const Projects = () => {
	const [projects, setProjects] = useState([])
	const [deleteId, setDeleteId] = useState(null)
	const [selectedItem, setSelectedItem] = useState(null)
	const [form, setForm] = useState({
		id: null,
		img: '',
		company: '',
		budget: '',
		status: 'Working',
		completion: 0,
	})
	const [modalType, setModalType] = useState(null)

	useEffect(() => {
		const saved = localStorage.getItem('projects')
		if (saved) {
			setProjects(JSON.parse(saved))
		} else {
			setProjects(defaultProjects)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('projects', JSON.stringify(projects))
	}, [projects])

	const openModal = (type, project = null) => {
		setModalType(type)
		setForm(
			project || {
				id: null,
				img: '',
				company: '',
				budget: '',
				status: 'Working',
				completion: 0,
			}
		)
	}

	const saveProject = () => {
		if (!form.company || !form.budget) return
		setProjects(item =>
			form.id
				? item.map(prev => (prev.id === form.id ? form : prev))
				: [...item, { ...form, id: Date.now(), img: form.img || Projects1 }]
		)
		setModalType(null)
	}

	const confirmDelete = () => {
		setProjects(item => item.filter(item => item.id !== deleteId))
		setDeleteId(null)
	}

	return (
		<div className='px-[16px] text-white w-full'>
			<div className='dashboard-auth-bg py-[28px] px-[22px] rounded-[20px]'>
				<div className='flex justify-between mb-[28px]'>
					<div>
						<Heading type={'h2'} classList={'!text-[18px] mb-[5px]'}>
							Projects
						</Heading>
						<div className='flex items-center gap-[6px]'>
							<img src={Check} alt='Check logo image' width={15} height={15} />
							<Text classList={'!text-[#A0AEC0]'}>30 done this month</Text>
						</div>
					</div>
					<Button
						onClick={() => openModal('add')}
						classList={'!py-[0px] !w-[120px] !text-[11px]'}
					>
						Add projects
					</Button>
				</div>

				<table className='w-full bg-transparent border-none'>
					<thead className='text-left'>
						<tr>
							<th className='p-3 text-[#A0AEC0] text-[14px]'>Companies</th>
							<th className='p-3 text-[#A0AEC0] text-[14px]'>Budget</th>
							<th className='p-3 text-[#A0AEC0] text-[14px]'>Status</th>
							<th className='p-3 text-[#A0AEC0] text-[14px]'>Completion</th>
						</tr>
					</thead>
					<tbody>
						{projects.map(item => (
							<tr
								key={item.id}
								className='border-t border-t-[#56577A] hover:opacity-[85%]'
							>
								<td className='p-3 flex items-center gap-[17px]'>
									<img
										src={item.img}
										alt={item.company}
										className='w-8 h-8 rounded-full object-cover border border-gray-600'
									/>
									<Text>{item.company}</Text>
								</td>
								<td className='p-3'>
									<Text>{item.budget}</Text>
								</td>
								<td className='p-3'>
									<Text>{item.status}</Text>
								</td>
								<td className='p-3'>
									<div className='w-full bg-gray-700 rounded-full h-2'>
										<div
											className='h-2 rounded-full bg-[#0075ff]'
											style={{ width: `${item.completion}%` }}
										/>
									</div>
									<span className='text-xs text-gray-400'>
										{item.completion}%
									</span>
								</td>
								<td className='p-3 text-end'>
									<Button
										onClick={() => setSelectedItem(item)}
										classList={'bg-transparent !w-[20px] !py-[0px]'}
									>
										<DotsIcon />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{modalType && (
				<ProjectModal
					modalType={modalType}
					form={form}
					setForm={setForm}
					onCancel={() => setModalType(null)}
					onSave={saveProject}
				/>
			)}

			{selectedItem && (
				<ActionModal
					selectedItem={selectedItem}
					onEdit={item => {
						openModal('edit', item)
						setSelectedItem(null)
					}}
					onDelete={id => {
						setDeleteId(id)
						setSelectedItem(null)
					}}
					onCancel={() => setSelectedItem(null)}
				/>
			)}

			{deleteId && (
				<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
					<div className='bg-gray-900 p-6 rounded-lg w-80'>
						<Heading type={'h3'} classList={'!text-[18px] mb-[16px]'}>
							Are you sure?
						</Heading>
						<div className='flex justify-end gap-3'>
							<Button
								classList={'!bg-gray-400 !rounded-[5px]'}
								onClick={() => setDeleteId(null)}
							>
								Cancel
							</Button>
							<Button
								classList={'!bg-red-500 !rounded-[5px]'}
								onClick={confirmDelete}
							>
								Delete
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Projects
