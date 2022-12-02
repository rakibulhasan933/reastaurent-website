import Image from 'next/image';
import React from 'react';

const Sliders = () => {
	return (
		<div className="w-full h-screen carousel">
			<div id="slide1" className="relative w-full carousel-item">
				<Image src="/img/pexels-max-avans-5056859.jpg" alt='slider' width="100" height="100" objectFit="contain" className='w-full' />

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle">❮</a>
					<a href="#slide2" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide2" className="relative w-full carousel-item">
				<Image src="/img/pexels-max-avans-5056859.jpg" alt='slider' width="100" height="100" className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">❮</a>
					<a href="#slide3" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide3" className="relative w-full carousel-item">
				<Image src="/img/pexels-max-avans-5056859.jpg" alt='slider' width="100" height="100" className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">❮</a>
					<a href="#slide3" className="btn btn-circle">❯</a>
				</div>
			</div>
		</div>
	);
};

export default Sliders;