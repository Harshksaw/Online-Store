import React from 'react';
import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src="../public/log.png" alt="Company Logo" className="w-full" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-white text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-lg mb-4">Hugherts</p>
                        <p className="text-lg mb-4">Business Address: 30 N Gould St Ste R, Sheridan, WY 82801</p>
                        <p className="text-lg mb-4">Phone#: +1(505) 370-9091</p>
                        <p className="text-lg mb-4">Email: VELORAVEX@GMAIL.COM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;