/* eslint-disable no-useless-escape */
import { useState } from "react";
import { illustrationOne } from "../assets";

function Hero() {

    // State to store value
    const [ email, setEmail ] = useState('');

    // State to store Error Messages
    const [emailError, setEmailError] = useState('');

    // Function to validate Email
    function validateEmail(email) {

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        let isEmailValid = true;

        setEmailError('');

        if (email === '') {
            setEmailError("Email cannot be blank");
            isEmailValid = false;
            return isEmailValid;
        }

        if (!emailRegex.test(email)) {
            setEmailError('Please check your email');
            isEmailValid = false;
            return isEmailValid;
        }

        return isEmailValid;
    }

    // Function that will run when the user submits form
    function handleSubmit(e) {
        e.preventDefault();

        let isEmailValid = validateEmail(email);

        // Allow user to submit form
        if(isEmailValid) {
            console.log(`Email: ${email}`);
        }else {
            alert("Form data is incorrect")
        }
    }

    return(

        <section className="max-w-[90%] mx-auto py-[3rem]">

            <div className="sm:grid sm:grid-cols-2 sm:gap-[100px]">

                <img src={illustrationOne} alt="Illustration" className="w-full sm:col-end-3 sm:row-start-1" />

                <article className="sm:col-start-1 md:pt-[5rem]">

                    <div className="text-center sm:text-left">

                        <h1 className="font-raleway font-bold text-[1.2rem] xs:text-[2rem] lg:text-[2.2rem] xl:text-[3rem] mb-3">All your files in one secure <br className="block" /> location, accessible <br className="block sm:hidden"/> anywhere.</h1>

                        <p className="text-[.7rem] xs:text-[.9rem] lg:text-[1rem] xl:text-[1.3rem] font-raleway font-regularRaleway">Fylo stores your most important files in one <br className="block sm:hidden"/> secure location. Access <br className="hidden sm:block"/> them wherever you <br className="block sm:hidden"/> need, share and collaborate with friends, <br className="block sm:hidden"/> family, <br className="hidden sm:block"/> and co-workers.</p>

                    </div>

                    {/* Form Section */}

                    <form className="flex flex-col md:flex-row gap-5 mt-5" onSubmit={handleSubmit} noValidate>

                        <div className="md:w-[600px] lg:w-[1000px]">

                            <input 
                                type="email" 
                                className="border-2 border-desaturatedBlue py-3 pl-5 w-full rounded-[5px]" 
                                placeholder="Enter your email..."
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            
                            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}

                        </div>

                        <button type="submit" className="bg-brightBlue text-lightGrayishBlue font-raleway font-bold w-full py-[.8rem] md:py-[.6rem] text-[1.1rem] rounded-[5px] h-[50px]">Get Started</button>

                    </form>

                </article>

            </div>

        </section>

    )
}

export default Hero;