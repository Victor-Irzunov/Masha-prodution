import { Space } from 'antd'
import Image from 'next/image';

const SocialComp = ({ isActive }) => (
	<Space size={[16, 8]} wrap>

		<Image src='/images/socialicon/instagram.svg' alt='Инстаграм психолога' width={25} height={25} />
		<Image src='/images/socialicon/telegram.svg' alt='Инстаграм психолога' width={25} height={25} />
		<Image src='/images/socialicon/viber.svg' alt='Инстаграм психолога' width={30} height={30} />
		<Image src='/images/socialicon/whatsapp.svg' alt='Инстаграм психолога' width={25} height={25} />
		{
			!isActive && (<Image src='/images/socialicon/youtube.svg' alt='Инстаграм психолога' width={30} height={30} />)
		}


	</Space>
);
export default SocialComp


