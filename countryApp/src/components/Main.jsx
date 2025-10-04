import React, { useState } from 'react'
import Card from './Card'

function Main({data,region,searchCountry,setSearchCountry}) {
    const [status,setStatus]=useState(false)
	const filteredData=data.filter(country=>region ? country.region===region  : data)
// console.log(filteredData)
  return (
    <>
     <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-2xl font-bold leading-none sm:text-5xl">Welcome to CountryApp Website
		</h1>
		<p className="text-violet-600 font-semibold px-8 mt-8 mb-12 text-2xl">You can find data of any country in the website</p>
		{
			status ? (<input onChange={e=>setSearchCountry(e.target.value)} type="search" placeholder='search'></input>) : ""
		}
		<div className="flex flex-wrap justify-center">
			<button  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get started</button>
			<button onClick={()=>setStatus(!status)} className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Search</button>
            	
		</div>
    

	</div>
	 <ul className='flex justify-center items-center flex-wrap gap-4'>
		{
		filteredData.
		map(item=>{
			<Card key={item.alpha3Code} {...item} />
		} )
	 }
	 </ul>
</section> 
    </>
  )
}

export default Main
