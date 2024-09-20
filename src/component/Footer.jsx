import React from "react";

const Footer = () => {
  return (
    <div className="py-[130px] px-[230px] bg-[rgba(255,248,243,255)]">
      <footer className="flex justify-center gap-[50px]">
        <div className="w-1/2">
        <h3 class="text-black text-[35px] text-center">Lets Connect</h3>
            <p class="text-[#757575] text-center text-lg">Please fill out the form on this section to contact with me or call between
                9:00 A.M and 8.00 P.M ET,
                Monday through
                Friday.</p>
            <div className="text-center mt-4">
                <a className="inline-block" href=""><img src="/img/icons/facebook.png" alt=""></img></a>
                <a className="inline-block" href=""><img src="/img/icons/twitter.png" alt=""></img></a>
                <a className="inline-block" href=""><img src="/img/icons/insta.png" alt=""></img></a>
            </div>
        </div>

        <div className="w-1/2">
        <h3 class="text-black text-[35px] text-center">Let's Message Me</h3>
        <form action="">
        <input className="block h-[64px] w-full py-3 px-5 mb-6 bg-white border-none rounded-md" type="text" placeholder="Your name"></input>
        <input className="block h-[64px] w-full py-3 px-5 mb-6 bg-white border-none rounded-md" type="email" name="" id="" placeholder="Your Email"></input>
        <textarea className="block h-[64px] w-full py-3 px-5 mb-6 bg-white border-none rounded-md" name="" id="" cols="30" rows="20" placeholder="Message"></textarea>
        <button class="btn btn-warning text-white w-[120px] ml-10">Submit</button></form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
