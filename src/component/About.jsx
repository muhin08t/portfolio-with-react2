import React from 'react';

const About = () => {
    return (
        <div className='my-[130px] mx-[40px]'>
        <div className='bg-[rgba(255,248,243,255)] px-[150px] py-[130px] rounded-lg'>
            <h3 className="text-black text-[35px] text-center">About Me</h3>
            <p className="text-[#757575] text-center my-4">
                I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick
                websites that
                provide real value to the end user. Thousands of clients have procured exceptional resulfs while working
                with me.
                Delivering work within time and budget which meets clients requirements in our mata.
            </p>

            <div class="flex justify-around">
                <div class="about-item">
                    <p class="text-[#757575] text-lg">Name:</p>
                    <p class="text-[22px]">Mary Hardy</p>
                </div>
                <div class="about-item">
                    <p class="text-[#757575] text-lg">Email:</p>
                    <p class="text-[22px]">info@gmail.com</p>
                </div>
                <div class="about-item">
                    <p class="text-[#757575] text-lg">Date of birth:</p>
                    <p class="text-[22px]">11 November 1987</p>
                </div>
                <div class="about-item">
                    <p class="text-[#757575] text-lg">From:</p>
                    <p class="text-[22px]">Los Angeles, USA</p>
                </div>
            </div>

             </div>
        </div>
    );
};

export default About;