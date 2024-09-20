import React from 'react';

const Skills = () => {
    return (
        <div className='px-[40px] bg-[#f7f7f7]'>
            <div>
            <h3 className="text-black text-[35px] text-center">What I Do</h3>
            <p className="text-[#757575] text-center my-4">I have more than 10 years experience building software for
                clients all over
                the world. Below is a quick overview of my
                main technical skill sets and technologies i use. Want to find out more about my experience? Check out
                my online resume
                and project portfolio.</p>

                <div className="flex gap-7">
                <div className="bg-[#ffffff] p-7 rounded-md">
                    <img src="/img/icons/js.png" alt=""></img>
                    <h4 className="skill-title">Vanilla JavaScript</h4>
                    <p className="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="bg-[#ffffff] p-7 rounded-md">
                    <img src="/img/icons/react.png" alt=""></img>
                    <h4 className="skill-title">React</h4>
                    <p className="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="bg-[#ffffff] p-7 rounded-md">
                    <img src="/img/icons/nodejs.png" alt=""></img>
                    <h4 className="skill-title">Node JS</h4>
                    <p className="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="bg-[#ffffff] p-7 rounded-md">
                    <img src="/img/icons/mongo.png" alt=""></img>
                    <h4 className="skill-title">MongoDB</h4>
                    <p className="skill-description">List skill/technologies here. You can change the icon above to any of
                        the 1500+ FontAwesome 5
                        free icons available.
                        Aenean commodo ligula eget dolor.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skills;