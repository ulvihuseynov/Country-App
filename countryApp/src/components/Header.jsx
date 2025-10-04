import React from 'react'

function Header({data,setRegion}) {
	const reg=[...new Set(data.map(item=>item.region))]
	const middle=Math.ceil(reg.length/2)
	const leftSide=reg.slice(0,middle)
	const rightSide=reg.slice(middle)

	// console.log(rightSide)

  return (
    <>
     <header className="p-4 dark:bg-gray-100 dark:text-gray-800">

	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="items-stretch hidden space-x-3 md:flex">
			{
				leftSide.map(region=>(
					<li key={region} className="flex">
				<p onClick={()=>setRegion(region)} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{region}</p>
			</li>
				))
			}
			<li  aria-label="Back to homepage" className="flex items-center p-2">
			<p onClick={()=>setRegion(null)}>All</p>
		</li>
			{
				rightSide.map(region=>(
					<li key={region} className="flex">
				<p onClick={()=>setRegion(region)} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{region}</p>
			</li>
				))
			}
		</ul>
		
		
		<button title="Button" type="button" className="p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header> 
    </>
  )
}

export default Header
