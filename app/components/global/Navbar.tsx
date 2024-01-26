import { HamburgerMenuIcon, LogoIcon } from "../icons";

const Navbar: React.FC = () => {
  return (
    <>
      <header className="2xl:py-20 pt-14 fixed top-0 inset-x-0 w-full flex justify-center z-50">
        <div className="md:w-44 w-36 md:h-[88px] h-14 rounded-full border border-app-border grid grid-cols-2 divide-x divide-app-border bg-white">
          <button type="button" className="md:h-[88px] h-14 flex items-center justify-center rounded-l-full pl-2">
            <LogoIcon className="md:w-auto w-6" />
          </button>
          <button type="button" className="md:h-[88px] h-14 flex items-center justify-center rounded-r-full pr-2">
            <div>
              <HamburgerMenuIcon className="md:w-auto md:h-auto w-7 h-6" />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;