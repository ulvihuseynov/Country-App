import React from 'react'

function Navbar({leftSide,rightSide,setRegion}) {
  return (
    <div>
      <ul className={`items-stretch md:flex hidden space-x-3 `}>
			{
				leftSide.map(region=>(
					<li key={region} className="flex">
				<p onClick={()=>setRegion(region)} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{region}</p>
			</li>
				))
			}
			<li  aria-label="Back to homepage" className="flex items-center p-2">
			<p onClick={()=>setRegion(null)}>
				<img src="https://i.pinimg.com/736x/60/17/25/60172585078b61155e227c3af24016e4.jpg" alt="" className='w-16'/>
			</p>
		</li>
			{
				rightSide.map(region=>(
					<li key={region} className="flex">
				<p onClick={()=>setRegion(region)} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{region}</p>
			</li>
				))
			}
		</ul>
    </div>
  )
}

export default Navbar
