'use client';

import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from '../atoms/HamburgerIcon';
import { useState } from 'react';
import PAGES_QUERY from "../../queries/pages";
import { useQuery } from "@apollo/client";
import { Page_Entry } from '@/types/gql/graphql';

export default function Header() {
	const { loading, error, data: navItems } = useQuery(PAGES_QUERY);
	const [isOpen, setIsOpen] = useState(false);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const navitems = navItems.entries.filter((item: Page_Entry) => {
		return item.slug && item.slug !== 'home'
	});	

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

	return (
		<header className='container'>
			<nav className='flex justify-between items-center p-3 flex-wrap'>
				<Link href={'/'}>
					<Image
						src='/assets/Logo.png'
						alt='Next.js logo'
						width={150}
						height={38}
						priority
					/>
				</Link>
				<HamburgerIcon isOpen={isOpen} handleClick={toggleMenu} />
				<div className={`${isOpen ? 'visible' : 'opacity-0 translate-y-8 h-0 lg:h-auto lg:translate-y-0 invisible lg:visible lg:opacity-100'} flex flex-grow w-full lg:w-auto transition-opacity transition-transform duration-250 flex-col lg:flex-row bg-misty-rose-200 rounded-lg lg:rounded-none lg:bg-transparent lg:items-center gap-7 py-4 flex-grow justify-end`}>
					{navitems.map((item: Page_Entry) => (
						item.slug && <Link
							className='relative text-semibold px-4 text-misty-rose-900 hover:text-misty-rose-700 hover:border-misty-rose-700 transition-all duration-150'
							key={item.slug}
							href={item.slug}
						>
							{item.title}
						</Link>
					))}
					{/* <Button
						label='Boek nu'
						onClick={() => {}}
					/> */}

				
				</div>
			
			</nav>
		</header>
	);
}
