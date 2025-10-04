import React from 'react'

function Card({name, flags,capital,region}) {
  return (
    <div>
     <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={flags?.png} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{region}</span>
		<h2 className="text-xl font-semibold tracking-wide">{name?.common}</h2>
	</div>
	<p className="dark:text-gray-800">{capital}</p>
</div>
    </div>
  )
}

export default Card
