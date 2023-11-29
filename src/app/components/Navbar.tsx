import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NavLinks, categoryFilters } from '../constant'
import AnimatedLink from './animatelink/AnimatedLink'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session = {};

    

  return (
    <nav className='flexBetween navbar bg-white/70 shadow-sm'>
        <div className="flex-1 flexStart gap-10">
            <Link href="/">
                <Image src="/logo.svg" width={115} height={43} alt='Workoala' />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        <div className="flex">
                            <AnimatedLink name= {link.text}/>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
        <div className='flexCenter gap-4'>
            {session ? (
                <>
                    UserPhoto

                    <Link href="/create-project">
                         Share Work 
                    </Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar