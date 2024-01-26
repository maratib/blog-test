import { IBlog } from '@/app/types';
import React from 'react';

const Card: React.FC<IBlog> = ({ tags, title, image, date, readTime }) => {
  return (
    <>
      <div className='flex flex-wrap border-[10px] border-white rounded-2xl overflow-hidden'>
        <div className="w-full h-[320px] flex items-center bg-[linear-gradient(180deg,_#FFF_0%,_#F4F4F4_100%)]">
          <img src={image} alt="blog image" className='w-full h-[250px] object-contain' />
        </div>
        <div className='w-full px-6 py-10'>
          <div className="flex flex-wrap">
            <div className="w-full flex gap-5 items-center mb-6">
              {tags.map((tag: string, index?: number) => {
                return (
                  <React.Fragment key={index}>
                    <p className="2xl:text-xl text-sm font-medium leading-[30px] tracking-[0.2px] text-neutral-500">
                      {tag}
                    </p>
                    {tags.length > index! + 1 && <div className="w-2 h-2 bg-neutral-500 rounded-full" />}
                  </React.Fragment>
                )
              })}
            </div>
            <div className="w-full self-start min-h-40">
              <h2 className=" text-neutral-700 font-medium 2xl:text-[40px] lg:text-3xl lg:leading-[48px] text-2xl 2xl:leading-[53px] leading-[36px] tracking-[0.4px]">
                {title}
              </h2>
            </div>
            <div className="w-full flex gap-5 items-center">
              <p className="2xl:text-xl text-sm font-medium leading-[30px] tracking-[0.2px] text-neutral-500">
                {readTime}
              </p>
              <div className="w-2 h-2 bg-neutral-500 rounded-full" />
              <p className="2xl:text-xl text-sm font-medium leading-[30px] tracking-[0.2px] text-neutral-500">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
