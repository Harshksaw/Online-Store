import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {

        return (
            
            <footer className="bg-black text-white pt-2 pb-3 relative bottom-0 w-full">
              
                <Wrapper className="flex justify-between mt-5 flex-col md:flex-row gap-[10px] md:gap-0">

                    <div className="text-[12px] text-white/[0.8] hover:text-white cursor-pointer text-center md:text-left">
                        © 2024 Hugherts, Inc. All Rights Reserved
                    </div>

                    <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href="/products">Products</Link>
                        </div>
                        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href="/cart">Cart</Link>
                        </div>
                        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href="/about">About Us</Link>
                        </div>
                        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                            <a href="tel:+15053709091">Phone#: +1(505) 370-9091</a>
                        </div>
                        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                            Business Address:
                            <br />
                            30 N Gould St Ste R
                            <br />
                            Sheridan, WY 82801
                        </div>
                    </div>

                </Wrapper>
            </footer>
        );
     
    
};

export default Footer;