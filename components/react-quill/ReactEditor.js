"use client"
import { useState } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
// import ImageResize from 'quill-image-resize-module-react';
import { Button } from 'antd';
import dynamic from 'next/dynamic';

// Quill.register('modules/imageResize', ImageResize)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function ReactEditor({ onChange,isGetOne,value, setValue }) {
	const [isActive, setIsActive] = useState(false)
	var toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		['blockquote', 'code-block'],
		[{ 'header': 1 }, { 'header': 2 }],               // custom button values
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
		[{ 'direction': 'rtl' }],                         // text direction
		[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
		[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
		[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		[{ 'font': [] }],
		['clean'],                                         // remove formatting button
		['link', 'image'],
		[{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
	]

	const formats = [
		"width",
		"height",
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"color",
		"align",
		"alt",
		"style",
	];


	return (
		<>
			<ReactQuill
				theme="snow"
				value={value}
				onChange={e => {
					if (!isGetOne) {
						onChange(e)
					}
					
					setValue(e)
				}}
				modules={
					{
						toolbar: toolbarOptions,
						
					}
				}
				style={{ background: '#fff', borderRadius: '10px' }}
			// formats={formats}
			/>
			<Button
				type='primary'
				ghost
				onClick={() => setIsActive(i => !i)}
				className='mt-6'
			>
				{isActive ? 'закрыть' : 'смотреть'}
			</Button>
			{
				isActive ?
					<div className='mt-20 editors bg-white rounded-lg p-2 min-h-screen'>
						{parse(value)}
					</div>
					:
					undefined
			}
		</>
	)
}
export default ReactEditor;