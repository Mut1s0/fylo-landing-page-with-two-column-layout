import { navigation } from "../constants";
import { logo } from "../assets";

function Navigation() {

    return(

        <section className="max-w-[90%] mx-auto font-raleway">

            <div className="flex justify-between items-center py-[50px]">

                <img src={logo} alt="logo" />

                <div className="flex gap-[70px]">

                    {navigation.map((nav) => (

                        <ul key={nav.id}>

                            <li className="font-regularRaleway text-[1.3rem]">{nav.text}</li>

                        </ul>

                    ))}

                </div>

            </div>

        </section>
        
    )
}

export default Navigation;