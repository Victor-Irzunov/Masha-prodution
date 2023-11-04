import { Modal, Result } from 'antd'
import FormResetPassword from '../form/formPassword/FormResetPassword'
import moment from 'moment'
import { FormQuestion } from '../form/formQuestins/FormQuestion'
// import { useNavigate } from 'react-router-dom'

const ModalComp = (
	{ isModalOpen, setIsModalOpen, title, formReset, data, setOpen, setValue, formQuestins, resul }) => {
	// const navigate = useNavigate()

	const handleCancel = () => {
		setIsModalOpen(false)
		if (resul) {
			setOpen(false)
			setValue('')
			// navigate('/blog')
		}
	}
	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
		>
			{
				formReset && <FormResetPassword handleCancel={handleCancel} />
			}
			{
				resul && <div className=''>
					<Result
						status="success"
						title={`${data.name} Вы записаны`}
						subTitle={
							<div className='text-sm font-light'>
								<p>
									Дата консультации: {moment(data.start).format("DD-MM-YYYY HH:mm")}
								</p>
								<p>
									Будет проходить {data.type}
								</p>
								<p className='text-xs text-gray-400 mt-5'>
									Если у Вас не получится присутствовать на консультации, пожалуйста сообщите заранее сообщением в WhatsApp, Telegram или по телефону. Спасибо.
								</p>
							</div>
						}
					/>
				</div>
			}
			{
				formQuestins && <FormQuestion />
			}
		</Modal>
	)
}
export default ModalComp