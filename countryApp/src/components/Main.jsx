import React, { useState } from 'react'
import Card from './Card'
import RandomCard from './RandomCard'
import Title from './Title'

function Main({data,region,searchCountry,setSearchCountry}) {
    const [status,setStatus]=useState(false)
	const filteredData=data.filter(country=>region ? country.region===region  : data)
// console.log(filteredData)
console.log(searchCountry)
  return (
    <>
     {!region &&
		<Title setSearchCountry={setSearchCountry} setStatus={setStatus}/>}
<div className='pb-16 dark:bg-gray-100 dark:text-gray-800 flex justify-center items-center'>
	{
	!status && <RandomCard data={data}/>
}
</div>
    

	 <ul className='dark:bg-gray-100 dark:text-gray-800 flex justify-center items-center flex-wrap gap-4'>
		{
		filteredData.
		filter(item=>item?.name?.common?.toLowerCase().includes(searchCountry?.toLowerCase())).
		map(item=>(
			<Card key={item.alpha3Code} {...item} />
		 ) )
	 }
	 </ul>

    </>
  )
}

export default Main
