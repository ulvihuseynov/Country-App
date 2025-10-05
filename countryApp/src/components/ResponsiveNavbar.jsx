import React from 'react'

function ResponsiveNavbar({leftSide,rightSide,setRegion,navbarStatus}) {
    console.log(navbarStatus)
  return (
    <div>
  <ul className={`fixed  w-full top-0 right-0   font-semibold p-2 text-purple-500 bg-gray-300 items-stretch ${navbarStatus ? "flex":"hidden" } md:hidden space-x-3  flex-col `}>
    {/* className="flex items-center px-4 -mb-1 border-b-2 dark:border-" */}
			{
				leftSide.map(region=>(
					<li  key={region} className="flex ">
				<p onClick={()=>setRegion(region)} className="">{region}</p>
			</li>
				))
			}
			<li  aria-label="Back to homepage" className="flex items-center p-2">
			<p onClick={()=>setRegion(null)}>
				{/* <img src="https://i.pinimg.com/736x/60/17/25/60172585078b61155e227c3af24016e4.jpg" alt="" className='w-10'/> */}
                All
			</p>
		</li>
			{
				rightSide.map(region=>(
					<li key={region} className="flex">
				<p onClick={()=>setRegion(region)} className="">{region}</p>
			</li>
				))
			}
		</ul>
    </div>
  )
}

export default ResponsiveNavbar
