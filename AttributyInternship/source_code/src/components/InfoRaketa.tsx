import React from 'react'
import { TCardDetails } from '../@types/types'

const InfoRaketa: React.FC<TCardDetails> = ({cardDetails}) => {
	
  return (
    <div className='div2'>
        <div className=" max-w-md mx-auto">

	    <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden ">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
							        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Rocket
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Launch Year
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Launch Site
                                    </th>
							        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Links
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 text-start">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{cardDetails.rocket.rocket_name}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{cardDetails.launch_year}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{cardDetails.launch_site.site_name}</td>
							        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-cyan-600"><a href={cardDetails.links.wikipedia}>Wikipedia</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        </div>

    </div>
  )
}

export default InfoRaketa