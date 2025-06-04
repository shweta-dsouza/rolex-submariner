import { footerList } from "../constants";

const Footer = () => {

  return (
    <footer className="mb-10">
        <div className="screen-max-width">
            <div className="w-full flex-center flex-wrap gap-4">
                {footerList.map((link, idx) => (
                    <p key={link} className="font-semibold text-zinc-400 text-xs cursor-pointer hover:underline">
                        {link}{' '}
                        {idx !== footerList.length - 1 && (
                        <span className="mx-2"> | </span>
                        )}
                    </p>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;
