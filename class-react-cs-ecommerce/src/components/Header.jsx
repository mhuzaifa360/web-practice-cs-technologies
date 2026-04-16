import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router';
import { menus } from '../assets/constants/navbar';




function Header() {
  return (
    <div className=''>
        {/* top navbar */}
      <div className='h-8 border-b-2'>
        
      </div>


      {/* mid navbar */}
      <div className='px-20 flex flex-row justify-between items-center bg-gray-300 h-[80px]'>
        <div>
            <h1>LOGO HERE</h1>
        </div>
        <div className='flex justify-center'>
            <form action="">
                <input type="text" className='h-11'/>
            </form>
            <button className='bg-[#2196F3] p-3'>
            <IoIosSearch />
            </button>
        </div>


        {/* lower navbar */}
        <div className='bg-[#2196F3] '>
            
        </div>

        {/* 

    <div className="bg-black text-white p-2 mt-10 flex">
      {navbar.map((item, index) => (
        <div key={index}>
          <Link
            to={item.pathname}
            className={` ${ location.pathname === item.pathname ? "bg-green-950 p-2 ml-5" : "bg-black ml-5"}`} >{item.pathvalue}  </Link>
        </div>
      ))
      }
    </div>

        */}
      </div>
        {/* lower navbar */}
        <div className='bg-[#2196F3] '>
            {
                menus?.map((item)=>{
                    return(
                        <Link key={item.id} to={item.pathValue} >{item.pathName}</Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Header
