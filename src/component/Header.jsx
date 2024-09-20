import React from 'react';

const Header = () => {
    return (
        <div
        className="bg-no-repeat bg-secondaryBg" 
        style={{
          backgroundImage: "url('/img/developer.png'), url('/img/header_bg.png')",
          backgroundPosition: 'top left, bottom right',
        }}
        >
            <nav className='flex justify-between items-center mx-[200px] pt-5'>
            <h3 className='font-bold text-5xl'>Ma<span className='text-blue-500'>r</span>y</h3>
            <ul className='flex items-center list-none'>
                <li className='mr-12 text-black text-xl font-bold'>Portfolio</li>
                <li className='mr-12 text-black text-xl font-bold'>Blog</li>
                <li> <a href="#"> <button class="btn btn-warning text-white">Hire Me</button></a></li>
            </ul>
        </nav>

        <div className='flex justify-between mt-0 mr-9 mb-0 ml-48'>
            <div>
            <h4 className="text-5xl font-semibold">Hi, I am</h4>
                <h1 className="text-[85px] font-bold">Mary Hardy</h1>
                <p className="text-lg font-normal text-[rgb(117, 117, 117)]"> Shot what able cold new see hold.Friendly as an betrayed formerly he.
                    Morning
                    because as to society behaved moments.</p>
                <button className="btn btn-warning text-white mt-5 w-32">Download CV</button>
                <button className="btn btn-warning ml-5 text-white w-32"> Contact</button>
            </div>
            <img className="w-[580px]" src="/img/hardy.png" alt="Profile Picture of Hard"></img>
        </div>

        </div>
    );
};

export default Header;