import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import Navbar from './Navbar';
import ResponsiveNavbar from './ResponsiveNavbar';
function Header({data,setRegion}) {

	const [navbarStatus,setNavbarStatus]=useState(false)
	const reg=[...new Set(data.map(item=>item.region))]
	const middle=Math.ceil(reg.length/2)
	const leftSide=reg.slice(0,middle)
	const rightSide=reg.slice(middle)


	// console.log(rightSide)

  return (
    <>
     <header className="p-4 dark:bg-gray-100 dark:text-gray-800">

	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		
		<Navbar setRegion={setRegion} leftSide={leftSide} rightSide={rightSide}/>

			<ResponsiveNavbar navbarStatus={navbarStatus} leftSide={leftSide} rightSide={rightSide} setRegion={setRegion}/>
		
		
		<button onClick={()=>setNavbarStatus(!navbarStatus)}  title="Button" type="button" className="p-4 md:hidden cursor-pointer fixed right-0 z-20">
			<IoMdMenu   size={40}/>

		</button>
	</div>
</header> 
    </>
  )
}

export default Header
