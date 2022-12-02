import React from 'react';
import Image from 'next/image'

const Navbar = () => {
	return (
		<div className="bg-orange-400 navbar">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li><a>Home</a></li>
						<li><a>Products</a></li>
						<li><a>Menu</a></li>
						<li className='bg-orange-400 rounded'><a><Image src='/img/logo.png' alt='logo' width='50' height='50' /> </a></li>
						<li><a>Events</a></li>
						<li><a>Blogs</a></li>
						<li><a>Contacts</a></li>
					</ul>
				</div>
				<div className="flex content-center m-2">
					<div className='p-2 border rounded-full bg-slate-100'>
						<Image src="/img/telephone.png" alt='logo' width="32" height="32" />
					</div>
					<div className='flex-col px-2'>
						<div>ODER NOW !</div>
						<div>+8801794970431</div>
					</div>
				</div>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="p-0 menu menu-horizontal">
					<li><a>Home</a></li>
					<li><a>Products</a></li>
					<li><a>Menu</a></li>
					<li><a><Image src='/img/logo.png' alt='logo' width='100' height='100' /> </a></li>
					<li><a>Events</a></li>
					<li><a>Blogs</a></li>
					<li><a>Contacts</a></li>
				</ul>
			</div>
			<div className="mx-3 navbar-end">
				<a><Image src='/img/cart.png' alt='cart' width="40" height="40" /> </a>
			</div>
		</div>
	);
};

export default Navbar;