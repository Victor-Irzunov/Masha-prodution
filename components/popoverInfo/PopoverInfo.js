import React from 'react';
import { Popover } from 'antd';
import { QuestionCircleOutlined, InfoCircleTwoTone } from '@ant-design/icons'

const content = (
	<div>
		< InfoCircleTwoTone className='text-lg' /> <span className='font-semibold ml-2 text-lg'>Уточнение</span>
		<p className='mt-3 pl-2'>Если у Вас имеются вопросы, пожалуйста напишите мне и я с радостью отвечу в ближайшее время.</p>
	</div>
);

const PopoverInfo = () => (
	<div>
		<Popover content={content}  trigger="click">
			<QuestionCircleOutlined className='text-xl' />
		</Popover>
	</div>
);

export default PopoverInfo