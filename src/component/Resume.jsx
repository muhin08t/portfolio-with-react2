import React from 'react';

const Resume = () => {
    return (
        <div className='py-[130px] px-[40px] bg-[#f7f7f7]'>
            <div>
            <h3 className="text-black text-[35px] text-center">A summary of My Resume</h3>
            <div className="flex gap-7">
                <div className="resume-column">
                    <h3 className='font-bold text-xl'>My Education</h3>
                    <div>
                        <h4 className='font-semibold text-lg'>Master in Computer Engineering</h4>
                        <h5 className="text-[#757575] text-[20px] font-semibold ">Harvard University / 2015 - 2017</h5>
                        <p className='my-4 font-semibold'>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>

                    <hr></hr>

                    <h3 className='font-bold text-xl'>My Education</h3>
                    <div>
                        <h4 className='font-semibold text-lg'>Master in Computer Engineering</h4>
                        <h5 className="text-[#757575] text-[20px] font-semibold ">Harvard University / 2015 - 2017</h5>
                        <p className='my-4 font-semibold'>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <hr />
                </div>
                <div className="resume-column">
                    <h3 className='font-bold text-xl'>My Experience</h3>
                    <div>
                        <h4 className='font-semibold text-lg'>Sr. Frontend Developer</h4>
                        <h5 className="text-[#757575] text-[20px] font-semibold ">Apple Inc / 2020 - Current</h5>
                        <p className='my-4 font-semibold'>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <hr></hr>
                    <h3 className='font-bold text-xl'>My Experience</h3>
                    <div>
                        <h4 className='font-semibold text-lg'>Sr. Frontend Developer</h4>
                        <h5 className="text-[#757575] text-[20px] font-semibold ">Apple Inc / 2020 - Current</h5>
                        <p className='my-4 font-semibold'>List skill/technologies here. You can change the icon above
                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="text-center mt-[50px]">
            <button className="btn btn-warning text-white mt-5 w-32">Download CV</button>
            </div>
            </div>
        </div>
    );
};

export default Resume;