import { useState } from 'react'
import { Button, Modal } from 'antd'
import FormLogin from '../form/formLogin/FormLogin'
import { FormRegister } from '../form/formRegistration/FormRegister'

const ModalComponent = ({ open, setOpen, fromPage }) => {
	const [isAccount, setIsAccount] = useState(false)

	const handleCancel = () => {
		setOpen(false)
	}
	return (
		<Modal
			open={open}
			title={<p className='text-2xl font-bold'>{isAccount ? "Регистрация" : "Вход"}</p>}
			centered
			footer={null}
			// onOk={handleOk}
			onCancel={handleCancel}
		>
			{
				!isAccount &&
				<>
					<p className='font-extralight mb-3'>Для доступа в Ваш личный кабинет введите e-mail.</p>
					<FormLogin handleCancel={handleCancel} fromPage={fromPage} />
					<span>Нет аккаунта?</span>
					<Button type='link' onClick={() => {
						setIsAccount(true)
						handleCancel()
						setTimeout(() => { setOpen(true) }, 0.5)
					}}
					style={{backgroundColor:'transparent'}}
					>Зарегистрироваться</Button>
				</>
			}
			{
				isAccount &&
				<>
					<p className='font-extralight mb-3'>Для доступа в Ваш личный кабинет введите e-mail.</p>
					<FormRegister handleCancel={handleCancel} />
					<span>Есть аккаунт?</span>

					<Button type='link'
						onClick={() => {
						setIsAccount(false)
						handleCancel()
							setTimeout(() => { setOpen(true) }, 0.7)
						}}
						style={{backgroundColor:'transparent'}}
					>
						Вход
					</Button>
				</>
			}
		</Modal>
	)
}
export default ModalComponent