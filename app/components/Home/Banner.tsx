import BannerCard from "../global/BannerCard";

const Banner: React.FC = () => {
  return (
    <>
      <section className="flex items-center relative">
        <img src="/union-lines.svg" alt="Union lines" className="object-cover absolute top-0 inset-x-0 w-full xl:block hidden" />
        <img src="/union-lines.svg" alt="Union lines" className="object-cover absolute bottom-0 inset-x-0 w-full transform rotate-180 xl:block hidden" />
        <img src="/union-lines-3.svg" alt="Union lines" className="object-cover absolute top-0 inset-x-0 w-full xl:hidden" />
        <img src="/union-lines-3.svg" alt="Union lines" className="object-cover absolute bottom-0 inset-x-0 w-full transform rotate-180 xl:hidden" />
        <div className="2xl:px-[202px] xl:px-36 lg:px-20 px-4 w-full md:pt-[224px] pt-[150px] pb-8 md:pb-[153px] relative z-30 max-w-[1920px] mx-auto">
          <div className="flex justify-between w-full lg:flex-nowrap flex-wrap mb-[71px]">
            <div className="lg:w-auto w-full lg:text-left text-center lg:mb-0 mb-4">
              <div className="2xl:max-w-[831px] xl:max-w-2xl lg:max-w-sm">
                <h1 className="2xl:text-8xl xl:text-[64px] lg:text-4xl text-3xl font-bold 2xl:leading-[110px] xl:leading-[76.8px] lg:leading-[50px] xl:tracking-[-0.64px] 2xl:tracking-[-0.96px] text-neutral-700">
                  Atlas Premier Knowledge Blogs:
                </h1>
              </div>
            </div>
            <div className="lg:w-auto w-full lg:text-left text-center">
              <div className="2xl:max-w-[606px] lg:max-w-[453px]">
                <p className="2xl:text-3xl text-neutral-500 font-medium leading-[150%]">
                  "Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.
                </p>
              </div>
            </div>
          </div>
          <div>
            <BannerCard tags={["FREELANCING 101", "Joseph Patrick"]} title="07 Ways to get Consistent Clients from Social Media" readTime="15 Min Read" date="23 - 05 -2023" image="/card-macbook.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner; 