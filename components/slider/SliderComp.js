import { Carousel } from 'antd'
import Image from 'next/image'
import slider1 from '../../public/images/slider/slider-1.webp'
import slider2 from '../../public/images/slider/slider-2.webp'
import slider3 from '../../public/images/slider/slider-3.webp'
import slider4 from '../../public/images/slider/slider-4.webp'


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

export default SliderComp;