import { useState, useEffect } from 'react'
import {
	Authors1,
	Authors2,
	Authors3,
	Authors4,
	Authors5,
	Authors6,
} from '../assets/images'
import { AuthorModal, Button, Heading, Input, Text } from '../components'
import { NotificationIcon, ProfileIcon, SettingsIcon } from '../assets/icons'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Authors = () => {
	const getStoredAuthors = () => {
		const data = localStorage.getItem('authors')
		return data
			? JSON.parse(data)
			: [
					{
						id: 1,
						img: Authors1,
						name: 'Esthera Jackson',
						email: 'esthera@simmmple.com',
						function: 'Manager / Organization',
						status: 'Online',
						employed: '14/06/21',
					},
					{
						id: 2,
						name: 'Alexa Liras',
						img: Authors2,
						email: 'alexa@simmmple.com',
						function: 'Programmer / Developer',
						status: 'Offline',
						employed: '14/06/21',
					},
					{
						id: 3,
						name: 'Laurent Michael',
						img: Authors3,
						email: 'laurent@simmmple.com',
						function: 'Executive / Projects',
						status: 'Online',
						employed: '14/06/21',
					},
					{
						id: 4,
						name: 'Freduardo Hill',
						img: Authors4,
						email: 'freduardo@simmmple.com',
						function: 'Manager / Organization',
						status: 'Online',
						employed: '14/06/21',
					},
					{
						id: 5,
						name: 'Daniel Thomas',
						img: Authors5,
						email: 'daniel@simmmple.com',
						function: 'Programmer / Developer',
						status: 'Offline',
						employed: '14/06/21',
					},
					{
						id: 6,
						name: 'Mark Wilson',
						img: Authors6,
						email: 'mark@simmmple.com',
						function: 'Designer / UI/UX Design',
						status: 'Offline',
						employed: '14/06/21',
					},
			  ]
	}
	const [_cookies, removeCookies] = useCookies(['token'])
	const navigate = useNavigate()
	const [authors, setAuthors] = useState(getStoredAuthors)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalType, setModalType] = useState('add')
	const [formData, setFormData] = useState({
		id: null,
		img: '',
		name: '',
		email: '',
		function: '',
		status: 'Offline',
		employed: '',
	})

	useEffect(() => {
		localStorage.setItem('authors', JSON.stringify(authors))
	}, [authors])

	const toggleStatus = id => {
		setAuthors(prev =>
			prev.map(author =>
				author.id === id
					? {
							...author,
							status: author.status === 'Online' ? 'Offline' : 'Online',
					  }
					: author
			)
		)
	}

	const openAddModal = () => {
		setModalType('add')
		setFormData({
			id: null,
			img: '',
			name: '',
			email: '',
			function: '',
			status: 'Offline',
			employed: new Date().toLocaleDateString(),
		})
		setIsModalOpen(true)
	}

	const openEditModal = author => {
		setModalType('edit')
		setFormData(author)
		setIsModalOpen(true)
	}

	const handleSave = () => {
		if (modalType === 'add') {
			setAuthors(item => [...item, { ...formData, id: Date.now() }])
		} else {
			setAuthors(item => item.map(a => (a.id === formData.id ? formData : a)))
		}
		setIsModalOpen(false)
	}
	function handleLogout(e) {
		e.preventDefault()
		const isConfirmed = confirm('Do you want to leave?')
		if (isConfirmed) {
			removeCookies('token')
			navigate('/login')
		}
	}

	return (
		<div className='pt-[22px] pl-[24px] pr-[22px] pb-[37px]'>
			<div className='flex items-center justify-between mb-[26px]'>
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
			<div className='dashboard-auth-bg pt-[28px] px-[22px] pb-[22px] rounded-[20px]'>
				<div className='flex justify-between items-center mb-[23px]'>
					<Heading type={'h2'} classList={'!text-[18px]'}>
						Authors Table
					</Heading>
					<Button onClick={openAddModal} classList={'!py-[10px] !w-[120px]'}>
						Add author
					</Button>
				</div>

				<div className='overflow-x-auto rounded-lg'>
					<table className='w-full border-none bg-transparent'>
						<thead>
							<tr className='text-[#A0AEC0]'>
								<th className='p-3 text-left text-[14px]'>Author</th>
								<th className='p-3 text-left text-[14px]'>Function</th>
								<th className='p-3 text-left text-[14px]'>Status</th>
								<th className='p-3 text-left text-[14px]'>Employed</th>
								<th className='p-3 text-left text-[14px]'>Edit</th>
							</tr>
						</thead>
						<tbody>
							{authors.map(item => (
								<tr
									key={item.id}
									className='border-t-[1px] border-t-[#56577A] hover:opacity-[85%]'
								>
									<td className='p-3'>
										<div className='flex items-center gap-3'>
											<img
												src={item.img}
												alt={item.name}
												className='w-10 h-10 rounded-full object-cover'
											/>
											<div>
												<Text>{item.name}</Text>
												<Text classList={'!text-[#A0AEC0]'}>{item.email}</Text>
											</div>
										</div>
									</td>
									<td className='p-3'>
										<Text>{item.function}</Text>
									</td>
									<td className='p-3'>
										<Button
											onClick={() => toggleStatus(item.id)}
											classList={`!w-[65px] !py-[8px] rounded-[8px] !text-[11px] ${
												item.status === 'Online'
													? '!bg-[#01b574]'
													: '!bg-[#051c44]'
											}`}
										>
											{item.status}
										</Button>
									</td>
									<td className='p-3'>
										<Text>{item.employed}</Text>
									</td>
									<td className='p-3'>
										<Button
											onClick={() => openEditModal(item)}
											classList={
												'!w-[27px] !bg-transparent !text-[11px] !py-[0px]'
											}
										>
											Edit
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<AuthorModal
				isOpen={isModalOpen}
				onClose={setIsModalOpen}
				onSave={handleSave}
				formData={formData}
				setFormData={setFormData}
				modalType={modalType}
			/>
		</div>
	)
}

export default Authors
