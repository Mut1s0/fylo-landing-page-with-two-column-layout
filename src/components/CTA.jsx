/* eslint-disable no-useless-escape */

import { useState } from "react";

function CTA() {

    const [ email, setEmail ] = useState('');

    const [ emailError, setEmailError ] = useState('');

    function validateEmail(email) {

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        let isEmailValid = true;

        setEmailError('');

        if (email === '') {
            setEmailError("Email cannot be blank");
            isEmailValid = false;
            return isEmailValid;
        }

        if(!emailRegex.test(email)) {
            setEmailError('Please check your email');
            isEmailValid = false;
            return isEmailValid;
        }

        return isEmailValid;

    }

    function handleSubmit(e) {
        e.preventDefault();

        let isEmailValid = validateEmail(email)

        if(isEmailValid) {
            console.log(`Email: ${email}`);
        }else {
            alert("Form data is incorrect")
        }
    }

    return(

        <section className="bg-desaturatedBlue py-[70px]">

            <div className="max-w-[90%] mx-auto md:flex md:items-center md:justify-center md:gap-10">

                <article className="text-center md:text-left md:w-[100%]">

                    <h1 className="text-lightGrayishBlue font-raleway font-bold mb-5 text-[1.7rem] md:text-[2rem]">Get early access today</h1>

                    <p className="text-lightGray font-openSans font-regularOpenSans text-[1.2rem] md:text-[1.3rem]">It only takes a minute to sign up and our <br className="block sm:hidden"/> free starter tier <br className="hidden sm:block"/> is extremely generous. If <br className="block sm:hidden"/> you have any questions, our support team <br className="block"/> would be happy to help you.</p>

                </article>

                <form onSubmit={handleSubmit} noValidate className="max-w-[60%] md:max-w-[100%] md:w-[100%] mx-auto mt-10">

                    <div className="mb-4">

                        <input 
                            type="email"
                            placeholder="Enter your email ..."
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-3 md:py-4 pl-5 w-full rounded-[5px] mb-2 border-2 border-desaturatedBlue"
                        />

                        {emailError && <p className=" text-lightGrayishBlue font-raleway font-bold">{emailError}</p>}

                    </div>

                    <button type="submit" className="bg-brightBlue text-lightGrayishBlue font-raleway font-bold w-full py-[.8rem] md:py-[.9rem] text-[1.1rem] md:text-[1.2rem] rounded-[5px] md:w-[40%]">Get Started</button>

                </form>

            </div>

        </section>
        
    )
}

export default CTA;