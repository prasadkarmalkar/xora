import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { socials } from '../constants';

const Footer = () => {
	const NavLink = ({ title }) => (
		<LinkScroll
			to={title}
			offset={-100}
			spy
			smooth
			className='h5 text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 my-4'
		>
			{title}
		</LinkScroll>
	);

	return (
		<footer className=''>
			<div className='flex relative items-stretch max-lg:flex-col-reverse'>
				<div className='flex-50 py-28 px-20 max-lg:container'>
					<ul className='block'>
						<li className='nav-li mb-10'>
							<NavLink title={'features'} />
						</li>
						<li className='mb-10'>
							<NavLink title={'pricing'} />
						</li>

						<li className='nav-li mb-10'>
							<NavLink title={'faq'} />
						</li>
						<li className='mb-10'>
							<NavLink title={'download'} />
						</li>
					</ul>
					<div className='flex body-3 justify-between mt-20 flex-wrap'>
						<p>Copyright none</p>
						<div className='flex justify-between gap-3 items-center flex-wrap'>
							<a href="#" className='transition-all hover:text-p1 duration-500'>Privacy policy</a>
							<div className='size-1 bg-p1 rounded-full max-md:hidden' />
							<a href="#" className='transition-all hover:text-p1 duration-500'>Privacy policy</a>
						</div>
					</div>
				</div>
				<div className='absolute left-[calc(50%-32px)] top-28 max-lg:top-[calc(50%-40px)] bg-s2 p-3 rounded-full border-2 border-s4'>
					<img src="images/faq-logo.svg" alt="Logo" />
				</div>
				<div className='g6 flex-50 py-28 lg:px-28 max-lg:container '>
					<h4 className='h4 text-p4 mb-5'>Subscribe</h4>
					<p className='max-w-440 body-1'>Sign up to our newsletter for feature updates and our undying love.</p>
					<div className='max-w-512 mt-14 p-4 transition-borderColor duration-300 rounded-2xl flex justify-between items-center bg-s2 border-2 border-s3 hover:border-s4 cursor-text'>
						<input className=' p-2 	flex-1 bg-transparent focus:outline-none' type="email" placeholder='youremail@yourdomain.com' />
						<button className='hover:text-p1 border-2 border-s3 p-2 rounded-2xl'>Send</button>
					</div>

					<div className='flex justify-start mt-20 gap-6'>
						{socials.map(singleSocial => (
							<a href={singleSocial.url} key={singleSocial.id} className='p-4 rounded-full border-2 border-s3 bg-s1 block transition-all duration-500 hover:border-p1'>
								<img src={singleSocial.icon} alt={singleSocial.title} className='size-6' />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
