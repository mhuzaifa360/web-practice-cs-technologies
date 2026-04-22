import React, { useState } from 'react'

export default function Tabs() {
    const tabs= [
      'Using vite', 
      'Using PostCSS' , 
      'Tailwind CLI', 
      'Framework Guides', 
      'Play CDN']
    const [tab,setTab] =useState("Using vite")  
    const content={
      'Using vite': "Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.", 

      'Using PostCSS' :"Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with frameworks like Next.js and Angular.", 

      'Tailwind CLI': "The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.", 

      'Framework Guides': "Framework-specific guides that cover our recommended approach to installing Tailwind CSS in a number of popular environments.", 

      'Play CDN': "Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not intended for production."
    }
  return (
    
    <div className='bg-slate-200 w-8/12 m-36 p-10 rounded-lg'>
      {/* heading */}
      <h2 className='text-2xl'>Installation</h2>
      {/* show the tab name */}
      <div className='flex  rounded-md' >
        {
          tabs.map((item,index)=>{
            return(
              <div key={index} onClick={() => setTab(item)}  style={{
                cursor: 'pointer',
                padding: '5px 10px',
                borderBottom: tab === item ? '2px solid black' : 'none',
                fontWeight: tab === item ? 'bold' : 'normal',
                display: 'flex'
              }}
              >
                {item}  
              </div>
            )
          })
        }
      </div>
      {/* show the tab content */}
      <p className='p-6'>{content[tab]}</p>
      

    </div>
  )
}


