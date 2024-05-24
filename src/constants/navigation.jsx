import { IoHome } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";

export const navigation = [
    {
      label : "TV SHOWS",
      href : "tv",
      icon : <PiTelevisionSimpleFill/>
    },
    {
      label: "MOVIES",
      href: "movie",
      icon: <BiSolidMoviePlay/>
    }
  ]
  
export const mobileNavigation = [
    {
        label : "HOME",
        href : "/",
        icon : <IoHome/>
    },
    ...navigation,
    {
        label : "SEARCH",
        href : "/search",
        icon : <IoSearchCircle/>

    }
]

export default navigation