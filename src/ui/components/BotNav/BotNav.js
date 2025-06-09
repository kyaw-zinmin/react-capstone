import VerticalLinks from "../../atomic/VerticalLinks"
import { pageLinks, placeholderArr } from "../../../data/general"

export default function BotNav(){
  return(
    <nav
    className="bot-nav"
    >
      <img
        aria-label="Little Lemon Logo"
        className="bot-nav-logo"
        src="/assets/images/logos/Little Lemon Logo Bg Removed.png"
        alt="Little Lemon Logo" />
      <VerticalLinks
        aria-label="Bottom Page Navigation"
        additionalClass={"col-start-5"}
        linkTitle="Doormat Navigation"
        arrayOfLinks={pageLinks} />
      <VerticalLinks
        aria-label="Contact Links"
        additionalClass={"col-start-7"}
        linkTitle="Contact"
        arrayOfLinks={placeholderArr} />
      <VerticalLinks 
        aria-label="Social Media"
        additionalClass={"col-start-9"}
        linkTitle="Socials"
        arrayOfLinks={placeholderArr} />
      <p
        className="paragraph col-span-8 col-start-3 row-span-1 row-start-8"
      >Copyright &copy; 2025 Kyaw Zin Min All Rights Reserved</p>
    </nav>
  )
}