import React from "react";
import { IBlog } from "@/app/types";

const BannerCard: React.FC<IBlog> = ({ tags, title, readTime, date, image }) => {
  return (
    <>
      <div className="border-[13px] border-white bg-light-gray rounded-[32px] shadow-banner-card overflow-hidden">
        <div className="grid lg:grid-cols-2 2xl:min-h-[588px] lg:min-h-[441px] h-full">
          <div className="lg:h-full h-[300px]">
            <img src={image} alt="mac-book" className="w-full h-full object-cover" />
          </div>
          <div className="2xl:pl-[91px] lg:pl-[68px] lg:pt-[67px] lg:pb-[64px] xl:pr-[65px] relative lg:mt-0 mt-10">
            <div className="flex flex-wrap">
              <div className="w-full flex gap-5 items-center mb-6 lg:justify-start justify-center">
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
              <div className="w-full self-start lg:text-left text-center lg:mb-0 mb-10">
                <h2 className="2xl:text-[56px] lg:text-[40px] text-3xl font-medium 2xl:leading-[80px] leading-[53px] 2xl:tracking-[-0.56] xl:tracking-[-0.4px] tracking-[0.32px] text-neutral-700">
                  {title}
                </h2>
              </div>
              <div className="w-full flex gap-5 items-center mb-6 lg:justify-start justify-center lg:absolute bottom-[64px]">
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
      </div>
    </>
  );
};

export default BannerCard;