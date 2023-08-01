import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import ProfileMenu from './ProfileMenu'

const Navbar = async () => {

const session = await getCurrentUser()

  return (
   <nav className="flex justify-between items-center py-5 px-8 border-b gap-4">
     <div className="flex-1 flex items-center justify-start">
       <Link href='/'>
         <Image src='/landerBG.png' width={50} height={50} alt='logo' className='mr-12'/>
       </Link>
       <ul className='lg:flex hidden text-sm gap-7 font-medium'>
        {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>  
        ))}
       </ul>
     </div>

     <div className='flex justify-center items-center gap-4'>
       {session?.user ? (
        <>
        <ProfileMenu session={session}/>

        <Link href='/create-project'>
        Share your work
        </Link>

      
        </>
       ) : (
        <AuthProviders/>
       )}
     </div>
   </nav>
  )
}

export default Navbar