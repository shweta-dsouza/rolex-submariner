import { bagSvg, rolexImg, searchSvg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center w-full py-5 sm:px-10 px-5">
            <nav>
                <img src={rolexImg} alt="rolex logo" width={40} height={40}/>
            </nav>

            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map(navItem => (
                    <div key={navItem} className="sm:px-5 px-2 text-gray-400 hover:text-white text-sm transition-all cursor-pointer">
                        {navItem}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
                <img src={searchSvg} alt="search" width={18} height={18}/>
                <img src={bagSvg} alt="bag" width={24} height={24}/>
            </div>
        </header>
    )
}

export default Navbar;