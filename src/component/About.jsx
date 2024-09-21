import React from 'react';

const About = () => {
    return (
        <div className='py-[130px] px-[40px] bg-[#f7f7f7]'>
        <div className='bg-[rgba(255,248,243,255)] px-[150px] py-[80px] rounded-lg'>
            <h3 className="text-black text-[35px] text-center">About Me</h3>
            <p className="text-[#757575] text-center my-4">
                I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick
                websites that
                provide real value to the end user. Thousands of clients have procured exceptional resulfs while working
                with me.
                Delivering work within time and budget which meets clients requirements in our mata.
            </p>

            <div className="flex justify-around">
                <div className="about-item">
                    <p className="text-[#757575] text-lg">Name:</p>
                    <p className="text-[22px]">Mary Hardy</p>
                </div>
                <div className="about-item">
                    <p className="text-[#757575] text-lg">Email:</p>
                    <p className="text-[22px]">info@gmail.com</p>
                </div>
                <div className="about-item">
                    <p className="text-[#757575] text-lg">Date of birth:</p>
                    <p className="text-[22px]">11 November 1987</p>
                </div>
                <div className="about-item">
                    <p className="text-[#757575] text-lg">From:</p>
                    <p className="text-[22px]">Los Angeles, USA</p>
                </div>
            </div>

             </div>
        </div>
    );
};

export default About;