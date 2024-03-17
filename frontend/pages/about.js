import Image from 'next/image';
import logo from "../public/log.png";
const About = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <Image src={logo} alt="Company Logo" className="w-[70%]" />
                </div>
                <div className="w-full md:w-1/2">

                    <div className="text-white text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <h2 className="text-4xl mb-4 underline border-lime-200">Hugherts</h2>
                        <h3 className="text-lg mb-4">Business Address: 30 N Gould St Ste R, Sheridan, WY 82801</h3>
                        <p className="text-lg mb-4">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14a1 1 0 112 0v1a1 1 0 11-2 0v-1zm1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                +1(505) 370-9091
                            </span>
                        </p>
                        <p className="text-lg mb-4">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 14a1 1 0 112 0v1a1 1 0 11-2 0v-1zm1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                VELORAVEX@GMAIL.COM
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;