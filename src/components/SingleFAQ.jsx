import clsx from 'clsx';
import React, { useState } from 'react';

const SingleFAQ = ({ singleFAQ, openFaq, setOpenFaq }) => {
	const currentOpen = openFaq === singleFAQ.id;

	return (
		<div className='relative p-10 max-lg:p-5 rounded-3xl overflow-hidden my-2'>
			<div className='flex justify-between items-center pb-5'>
				<div className='max-w-sm'>
					<p className='text-p3 max-lg:hidden'>
						{singleFAQ.id < 10 && '0'}
						{singleFAQ.id}
					</p>
					<h6
						className={clsx(
							'h6 transition-colors duration-500',
							currentOpen ? 'text-p1' : 'text-p4'
						)}
					>
						{singleFAQ.question}
					</h6>
				</div>
				<button
					onClick={() =>
						setOpenFaq(!currentOpen ? singleFAQ.id : null)
					}
					className={clsx(
						'hover:border-s4 border-s5 border-2 transition-all duration-500 faq-icon rounded-full bg-s5 size-12 flex justify-center items-center z-4',
						openFaq === singleFAQ.id && 'after:rotate-180'
					)}
				></button>
			</div>
			<div
				className={`overflow-hidden transition-all duration-500 ${
					currentOpen ? 'max-h-96' : 'max-h-0'
				}`}
			>
				<p>{singleFAQ.answer}</p>
			</div>
			<div className={clsx('absolute inset-0 g5 -z-1 transition-all duration-500 opacity-0', currentOpen && 'opacity-100')}>
				<div className='max-w-28 h-0.5 bg-p1 left-5 relative'></div>
			</div>
		</div>
	);
};

export default SingleFAQ;
