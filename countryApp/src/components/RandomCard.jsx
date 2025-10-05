import React from 'react'

function RandomCard({data}) {
    const randomCountry=data[Math.floor(Math.random()*data.length)]
  return (
    <div>
      <div className="   p-2 shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4 sm:flex justify-center items-center gap-4 sm:w-[800px]">
		<div className="space-y-2 sm:w-[60%]">
			<img src={randomCountry?.flags?.png} alt="" className="block  w-full rounded-md h-72 dark:bg-gray-500" />
			
		</div>
		<div className="space-y-2 sm:w-[40%] flex flex-col ">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{randomCountry?.name?.common}</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
    </div>
  )
}

export default RandomCard
