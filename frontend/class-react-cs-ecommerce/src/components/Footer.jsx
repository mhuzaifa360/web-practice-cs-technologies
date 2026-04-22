import React from 'react'
import Typography from "./common/Typography";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-[325px] bg-[#F8F8F8] flex  justify-center items-center'>
      <div className='w-[90%] bg-slate-400 flex flex-row h-full'>

      <div className='w-[25%] border-2'>
        <Typography varient='h3'>Store Name</Typography>
        <Typography varient='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis vitae sed recusandae, ut cumque, saepe magnam perspiciatis placeat unde est repellendus, eos rerum velit explicabo? Numquam ipsam excepturi enim dolore.</Typography>
        <Typography varient='p'>2026 All rights reserved.</Typography>
      </div>
      <div className='w-[25%]'>
        <Typography varient='h3'>Usefull Links</Typography>
        <Typography varient='p'>Home</Typography>
        <Typography varient='p'>Store</Typography>
        <Typography varient='p'>Accessories</Typography>
        <Typography varient='p'>About Us</Typography>
      </div>
      <div className='w-[25%]'>
        <Typography varient='h3'>Our Offers</Typography>
        <Typography varient='p'>About Us</Typography>
        <Typography varient='p'>Information</Typography>
        <Typography varient='p'>Privacy Policy</Typography>
        <Typography varient='p'>Terms and Conditions</Typography>
      </div>
      <div className='w-[25%]'>
        <Typography varient='p'>Subscribe to our emails</Typography>
        <Typography varient='p'>For Latest News & Updates</Typography>
        <form action="">
          <input type="text" placeholder='Enter your Email'/>
          <button>Subscribe</button>
        </form>
        <div className='flex'>
          <FaSquareInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer
