import React from 'react';
import { Element } from 'react-scroll';
import { links, logos } from '../constants';
import Marker from '../components/Marker';

const Download = () => {
	return (
		<section className='g7 pt-24'>
			<Element name='download'>
				<div className='relative flex container'>
					<div className='lg:py-52 py-24'>
						<img
							src='/images/xora.svg'
							alt='Company Logo'
							width={162}
							height={55}
						/>
						<p className='max-w-440 my-14 body-1 max-md:my-10'>
							Try it now for free on iOS, Androind, PC, Web -
							whatever your flavor, we've got you covered.
						</p>
						<div className='flex gap-5 flex-wrap'>
							{links.map((link) => (
								<a className='' href={link.url}>
									<div className='hover:text-p1 p-5 rounded-full bg-s1 border border-s3 relative hover:border-p1 transition-borderColor duration-500'>
										<span className='absolute top-6 left-0 right-0 rotate-90'>
											<Marker />
										</span>
										{link.icon}
									</div>
								</a>
							))}
						</div>
					</div>
					<div className='border border-s3 absolute left-1/2 top-0 h-full w-full p-7 rounded-3xl max-lg:hidden'>
						<div className='p-5 bg-s1 rounded-2xl flex-1 h-full w-full'>
							<div className='mb-4 flex gap-2'>
								<div className='size-3 bg-s4 rounded-full' />
								<div className='size-3 bg-s3 rounded-full' />
								<div className='size-3 bg-s2 rounded-full' />
							</div>
							<img
								className='rounded-xl'
								height={640}
								width={856}
								src='/images/screen.jpg'
								alt='Platform Demo'
							/>
						</div>
					</div>
				</div>
				<div className='py-20 flex justify-center gap-22 flex-wrap'>
						{logos.map((singleLogo) => (
							<img src={singleLogo.url} alt={singleLogo.title} key={singleLogo.id} height={singleLogo.height} width={singleLogo.width} />
						))}
				</div>
			</Element>
		</section>
	);
};

export default Download;
