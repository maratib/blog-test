import React from 'react';

type Props = {
  links: string[]
}

const MenuLinks: React.FC<Props> = ({ links }) => {
  return (
    <>
      <div className='flex items-center xl:gap-4 lg:gap-2 gap-5 lg:flex-nowrap flex-wrap lg:justify-start justify-center'>
        {links.map((link: string, index: number) => {
          return (
            <React.Fragment key={`${link}${index}`}>
              {index === 0 && <a href="#" className='px-4 py-2.5 rounded-full bg-navy-blue-100 border border-navy-blue-primary text-navy-blue-primary text-base font-medium leading-6 tracking-[0.16px]'>{link}</a>}
              {index > 0 && <a href="#" className='px-4 py-2.5 rounded-full text-base font-medium leading-6 tracking-[0.16px] text-neutral-400'>{link}</a>}
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default MenuLinks;
