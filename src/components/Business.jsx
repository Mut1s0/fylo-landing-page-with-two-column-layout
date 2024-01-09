import { illustrationTwo, avatarTestimonial, iconArrow, quotes } from "../assets";

function Business() {

    return(

        <section id="business" className="mt-[50px]">

            <div className="py-[100px] md:pt-[170px] max-w-[90%] mx-auto md:flex md:flex-row-reverse md:gap-[50px]">

                <div className="md:w-[50%] flex items-center justify-center">

                    <img src={illustrationTwo} alt="Illustration Two" className="w-full" />

                </div>

                <article className="mt-[70px] md:mt-0 md:flex md:flex-col md:items-start md:justify-center md:w-[50%]">

                    <div>

                        <h2 className="text-center md:text-left font-raleway font-bold text-[1.4rem] ss:text-[1.6rem] lg:text-[2.1rem] mb-7">Stay productive, wherever you are</h2>

                        <p className="font-openSans font-regularOpenSans text-lightGray text-[1rem] ss:text-[.8rem] lg:text-[1rem] mb-7">Never let location be an issue when accessing <br className="block sm:hidden"/> your files. Fylo has you <br className="hidden sm:block"/> covered for all of your file <br className="block sm:hidden"/> storage needs.</p>

                        <p className="font-openSans font-regularOpenSans text-lightGray text-[1rem] ss:text-[.8rem] lg:text-[1rem] mb-10">Securely share files and folders with friends, <br className="block sm:hidden"/> family and colleagues for <br className="hidden sm:block"/> live collaboration. No <br className="block sm:hidden"/> email attachments required!</p>

                        <div className="flex items-center justify-center gap-2 mb-[60px] border-b-2 border-modernCyan pb-2 w-[180px] md:w-[210px] mx-auto md:ml-0 cursor-pointer">

                            <p className="font-openSans font-regularOpenSans text-modernCyan md:text-[1.2rem]">See how Fylo works</p>
                            <img src={iconArrow} alt="Arrow" className="w-[1.3rem] md:w-[1.5rem]" />

                        </div>

                    </div>

                    <div>

                        <div className="bg-white py-7 px-5 ss:px-10 rounded-[10px] max-w-[440px] md:max-w-[410px] mx-auto md:ml-0" id="testimony">

                            <div className="mb-6">

                                <img src={quotes} alt="Quotes" className="w-6 pb-4" />
                                <p className="font-openSans font-regularOpenSans text-veryDarkBlue">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                            </div>

                            <div className="flex items-center justify-start gap-[15px]">

                                <img src={avatarTestimonial} alt="Testimonials" className="rounded-full w-[40px] md:w-[50px]" />

                                <div>

                                    <h3 className="font-raleway font-bold text-[1rem]">Kyle Burton</h3>
                                    <p className="text-[.7rem] font-openSans font-regularOpenSans text-veryDarkBlue">Founder & CEO, Huddle</p>

                                </div>

                            </div>

                        </div>

                    </div>
                    
                </article>

            </div>

        </section>

    )
}

export default Business;