"use client"
import { Link as LinkScroll } from 'react-scroll'

export const ScrollComp = ({to, label}) => {
  return (
	<LinkScroll to={to}
	smooth={true}
	offset={-100}
	duration={800}
	className="cursor-pointer"
>
	{label}
</LinkScroll>
  )
}
