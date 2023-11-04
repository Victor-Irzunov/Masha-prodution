import { Carousel } from 'antd'
import Image from 'next/image'
import slider1 from '../../public/images/slider/slider-1.png'
import slider2 from '../../public/images/slider/slider-2.png'
import slider3 from '../../public/images/slider/slider-3.png'
import slider4 from '../../public/images/slider/slider-4.png'




// const contentStyle = {
// 	height: '160px',
// 	lineHeight: '160px',
// 	textAlign: 'center',
// };
const SliderComp = () => (
	<Carousel autoplay dots={false}>
		<div>
			<Image src={slider1} alt='картинка психолог' />
		</div>
		<div>
			<Image src={slider2} alt='картинка психолог'/>
		</div>
		<div>
			<Image src={slider3} alt='картинка психолог'/>
		</div>
		<div>
			<Image src={slider4} alt='картинка психолог'/>
		</div>
	</Carousel>
);

export { SliderComp }