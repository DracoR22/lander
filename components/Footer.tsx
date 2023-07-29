import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

type ColumnProps = {
  title: string
  links: Array<string>
}

const FooterColumn = ({title, links}: ColumnProps) => (
    <div className='flex-1 flex flex-col gap-3 text-sm min-w-max'>
      <h4 className='font-semibold'>
        {title}
      </h4>
      <ul className='flex flex-col gap-2 font-normal'>
        {links.map((link) => <Link href='/' key={link}>{link}</Link>)}
      </ul>
    </div>
)

const Footer = () => {
  return (
    <footer className="flex items-center justify-start flex-col lg:px-20 py-6 px-5 w-full
     gap-20 bg-neutral-100">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src='/landerBG.png' width={50} height={50} alt='logo'/>
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Share your projects and knowledge with our community
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>

          <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
          <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
          </div>

          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>

          <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
          <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
          </div>

          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>

        </div>
      </div>

      <div className='flex justify-between items-center max-sm:flex-col w-full text-sm font-normal'>
        <p>
          @ 2023 Lander. All rights reserved
        </p>

        <p className='text-gray'>
          <span className='text-black font-semibold'>
              8,876
          </span>  projects submited
        </p>
      </div>
    </footer>
  )
}

export default Footer