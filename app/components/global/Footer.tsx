import { FooterFacebookIcon, FooterInstagramIcon, FooterLinkedIn, FooterTwitterIcon } from "../icons";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-navy-blue-primary 2xl:p-24 xl:p-20 px-4 py-8 shadow-footer-shadow">
        <div className="bg-white md:rounded-[48px] rounded-2xl lg:pt-[100px] lg:px-[72px] px-6 pt-6 max-w-[1721px] mx-auto">
          <div className="flex justify-between md:mb-20 mb-16 lg:flex-nowrap flex-wrap">
            <div className="lg:w-auto w-full lg:block flex justify-center lg:mb-0 mb-16">
              <div className="lg:text-left text-center">
                <h2 className="2xl:text-3xl xl:text-xl font-bold text-neutral-800 2xl:tracking-[0.32px] xl:tracking-[0.2px]">Say Hello!</h2>
                <p className="2xl:text-2xl xl:text-xl font-normal 2xl:tracking-thinnest xl:tracking-[0.2px] text-neutral-600">Atlaspremier@gmail.com</p>
                <div className="flex 2xl:gap-4 lg:gap-5 md:gap-11 gap-8 lg:mt-8 mt-6">
                  <a href="#" className="2xl:p-3.5 p-2 bg-neutral-100 rounded-md">
                    <FooterInstagramIcon />
                  </a>
                  <a href="#" className="2xl:p-3.5 p-2 bg-neutral-100 rounded-md">
                    <FooterFacebookIcon />
                  </a>
                  <a href="#" className="2xl:p-3.5 p-2 bg-neutral-100 rounded-md">
                    <FooterTwitterIcon />
                  </a>
                  <a href="#" className="2xl:p-3.5 p-2 bg-neutral-100 rounded-md">
                    <FooterLinkedIn />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:gap-20 lg:w-auto w-full lg:justify-start md:justify-center justify-between">
              <div className="space-y-4">
                <a href="#" className="2xl:text-2xl xl:text-xl font-normal 2xl:tracking-thinnest xl:tracking-[0.2px] text-neutral-600 block">
                  Home
                </a>
                <a href="#" className="2xl:text-2xl xl:text-xl font-normal 2xl:tracking-thinnest xl:tracking-[0.2px] text-neutral-600 block">
                  About us
                </a>
                <a href="#" className="2xl:text-2xl xl:text-xl font-normal 2xl:tracking-thinnest xl:tracking-[0.2px] text-neutral-600 block">
                  Work
                </a>
              </div>
              <div className="space-y-4">
                <a href="#" className="2xl:text-2xl xl:text-xl font-normal 2xl:tracking-thinnest xl:tracking-[0.2px] text-neutral-600 block">
                  Services
                </a>
                <a href="#" className="2xl:text-2xl xl:text-xl font-normal 2xl:tracking-thinnest xl:tracking-[0.2px] text-neutral-600 block">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between lg:flex-nowrap flex-wrap">
            <div className="lg:w-auto w-full lg:text-left text-center lg:mb-0 mb-4">
              <span className="2xl:text-2xl xl:text-xl font-normal text-neutral-500 tracking-thinnest">
                NewYork, US
              </span>
            </div>
            <div className="lg:w-auto w-full lg:text-left text-center">
              <span className="2xl:text-2xl xl:text-xl font-normal text-neutral-500 tracking-thinnest">
                AtlasPremier. All Rights Reserved
              </span>
            </div>
          </div>
          <div className="lg:mt-[211px] mt-16">
            <h2 className="text-navy-blue-primary font-extrabold 2xl:text-[201px] xl:text-[170px] lg:text-[120px] 2xl:leading-[120px] xl:leading-[100px] lg:leading-[75px] 2xl:tracking-[-2.016px] xl:tracking-[-1.701px] text-center text-nowrap text-4xl leading-[22px] tracking-[-0.479px]">
              Atlas Premier
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;