import { navigation } from "../constants";
import { logo } from "../assets";

function Navigation() {

    return(

        <section className="max-w-[90%] mx-auto py-[2rem] sm:py-[4rem]">

            <div className="flex justify-between items-center font-raleway font-regularRaleway">

                <img src={logo} alt="Logo" className="w-[80px] sm:w-auto" />

                <div className="flex items-center justify-center gap-[15px] sm:gap-[40px]">

                    {navigation.map((nav) => (

                        <ul key={nav.id} className="cursor-pointer">

                            <li className="text-[.8rem] sm:text-[1.3rem]">{nav.text}</li>

                        </ul>

                    ))}

                </div>

            </div>

        </section>

    )
}

export default Navigation;