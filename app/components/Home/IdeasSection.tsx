import React from 'react';

const IdeasSection: React.FC = () => {
  return (
    <>
      <section className='lg:py-[100px] 2xl:px-[100px] lg:px-[72px] px-4 py-9 bg-neutral-50'>
        <div className='max-w-[1721px] mx-auto 2xl:h-[664px] lg:h-[480px] py-16 px-6 bg-[linear-gradient(180deg,_#2F5478_0%,_#22405C_100%)] rounded-3xl flex lg:flex-nowrap flex-wrap items-center justify-between xl:px-[100px] lg:px-10 relative overflow-hidden'>
          <img src="/union-lines-2.svg" alt="Union lines" className="object-cover absolute top-0 inset-x-0 w-full" />
          <img src="/union-lines-2.svg" alt="Union lines" className="object-cover absolute bottom-0 inset-x-0 w-full transform rotate-180" />
          <div className='2xl:max-w-[900px] lg:max-w-[600px] lg:w-auto w-full lg:mb-0 mb-16'>
            <h2 className='text-white 2xl:text-8xl 2xl:leading-[115px] 2xl:tracking-[-0.96px] xl:text-[64px] xl:leading-[76px] lg:text-5xl lg:leading-[55px] lg:tracking-[-0.64px] font-normal mb-4 text-[40px] leading-[48px] tracking-[0.4px]'>
              Transforming your <span className='font-bold'>Ideas into reality</span>
            </h2>
            <p className='text-neutral-200 xl:text-2xl lg:text-xl text-base leading-6 font-medium lg:leading-9 lg:tracking-thinnest tracking-[0.16px]'>Let's build something extraordinary together to  captivate your audience.</p>
          </div>
          <div className='lg:w-auto w-full lg:block flex justify-center'>
            <div className='2xl:w-[404px] 2xl:h-[404px] w-[250px] h-[250px] border-2 border-white flex items-center justify-center rounded-full text-center'>
              <span className='2xl:text-3xl text-2xl font-medium 2xl:leading-[48px] leading-[36px] 2xl:tracking-[0.32px] tracking-thinnest text-navy-blue-100 max-w-40'>Let's Work Together!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IdeasSection;
