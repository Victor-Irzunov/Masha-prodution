import React from 'react'
import { Drawer } from 'antd'
import FormZapisi from '../formAdmin/formZapisi/FormZapisi'
import FormEditZapisi from '../formAdmin/formEditZapisi/FormEditZapisi'

export const DrawerWindow = ({ open, setOpen, isActive }) => {
	const onClose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			title={isActive.add ? "Создать запись" : "Редактировать запись"}
			placement='left'
			onClose={onClose}
			open={open}
			// style={{ background: '#ccc' }}
		>
			{
				isActive.add ?
					<FormZapisi />
					:
					<FormEditZapisi />
			}

		</Drawer>
	)
}
