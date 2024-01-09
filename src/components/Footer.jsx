import { contactDetails, aboutUs, contactUs } from "../constants";
import { logo, facebook, twitter, instagram } from "../assets";

function Footer() {

    return(

        <footer className="bg-veryDarkBlue py-[100px]">

            <div className="max-w-[90%] mx-auto md:flex md:justify-between md:items-center">
                
                <section className="mb-10">

                    <img src={logo} alt="Logo" className="mb-10"/>

                    {contactDetails.map((contacts) => (

                        <div key={contacts.id} className="flex items-center justify-start gap-[20px] text-lightGrayishBlue pb-5">

                            <img src={contacts.icon} alt="" />
                            <p>{contacts.details}</p>

                        </div>

                    ))}

                </section>

                <section className="mb-10">

                    <div className="flex flex-col gap-5 md:justify-end md:h-[280px]">

                        {aboutUs.map((about) => (

                            <ul key={about.id}>

                                <li className="text-lightGrayishBlue cursor-pointer">{about.link}</li>

                            </ul>

                        ))}

                    </div>

                </section>

                <section className="mb-10">

                    <div className="flex flex-col gap-5 md:justify-end md:h-[210px]">

                        {contactUs.map((contact) => (

                            <ul key={contact.id}>

                                <li className="text-lightGrayishBlue cursor-pointer">{contact.content}</li>

                            </ul>

                        ))}

                    </div>

                </section>

                <section>

                    <div>

                        <ul className="flex items-center justify-center gap-7">

                            <li className="border-2 rounded-full p-2 cursor-pointer hover:to-desaturatedBlue">

                                <img src={facebook} alt="Facebook" />

                            </li>

                            <li className="border-2 rounded-full p-2 cursor-pointer">

                                <img src={twitter} alt="Twitter" />

                            </li>

                            <li className="border-2 rounded-full p-2 cursor-pointer">

                                <img src={instagram} alt="Instagram" />

                            </li>

                        </ul>

                    </div>

                </section>

            </div>

        </footer>
        
    )
}

export default Footer;