import { bagSvg, rolexImg, searchSvg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center w-full py-5 px-10">
            <nav className="flex w-full screen-max-width">
                <img src="/.netlify/images?url=/src/assets/images/rolex-crown.png" alt="rolex logo" width={40} height={40}/>

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map(navItem => (
                        <div key={navItem} className="sm:px-5 px-2 text-gray-400 hover:text-white text-sm transition-all cursor-pointer">
                            {navItem}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
                    <img src="/.netlify/images?url=/src/assets/images/search.svg" alt="search" width={18} height={18}/>
                    <img src="/.netlify/images?url=/src/assets/images/fav.png" alt="bag" width={24} height={24}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;