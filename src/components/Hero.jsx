// import { useState } from "react";
// import FormInputs from "../components/FormInputs";
import { illustrationOne } from "../assets";

function Hero() {

    // const [ values, setValues ] = useState({
    //     email: ""
    // });

    // const inputs = [
    //     {
    //         id: 1,
    //         name: "email",
    //         type: "email",
    //         placeholder: "Enter your Email",
    //         errorMessage: "Please check your email",
    //         required: true
    //     }
    // ]

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value })
    // }

    // console.log(values);

    return(

        <section className="max-w-[90%] mx-auto">

            <div className="flex flex-col-reverse md:flex-row items-center">

                <article className="text-center md:text-left w-full">

                    <h1 className="font-raleway font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.4rem] xl:text-[3.2rem] pb-[20px]">All your files in one secure <br /> location, accessible <br className="sm:hidden"/> anywhere.</h1>

                    <p className="font-raleway font-bold text-[.7rem] md:text-[.8rem] lg:text-[1.1rem] xl:text-[1.4rem]">Fylo stores your most important files in one <br className="sm:hidden"/> secure location. Access <br className="hidden sm:block"/> them wherever you <br className="sm:hidden"/> need, share and collaborate with friends, <br className="sm:hidden"/> family, <br className="hidden sm:block"/> and co-workers.</p>

                    {/* <div>
                        
                        <form onSubmit={handleSubmit}>

                            {inputs.map((input) => (

                                <FormInputs
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />

                            ))}

                            <button>Get Started</button>

                        </form>

                    </div> */}

                </article>

                <div className="w-full">

                    <img src={illustrationOne} alt="Illustration One" className="md:w-full" />

                </div>


            </div>

        </section>

    )
}

export default Hero;