import { navigation } from "../constants";
import { logo } from "../assets";

function Navigation() {

    return(

        <section className="max-w-[90%] mx-auto font-raleway">

            <div className="flex justify-between items-center py-[70px]">

                <img src={logo} alt="logo" className="w-[80px] md:w-[160px]" />

                <div className="flex gap-[10px] sm:gap-[70px]">

                    {navigation.map((nav) => (

                        <ul key={nav.id}>

                            <li className="font-regularRaleway text-[.8rem] sm:text-[1.3rem]">{nav.text}</li>

                        </ul>

                    ))}

                </div>

            </div>

        </section>
        
    )
}

export default Navigation;