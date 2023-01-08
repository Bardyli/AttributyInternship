import React from 'react'
import { TCardDetails } from '../@types/types';

const Karta: React.FC<TCardDetails> = ({cardDetails}) => {
  
  return (
    <div className=' max-w-md m-auto p-8 div1'>
      <div className='grid gap-6 gap-x-8'>
        <div className='card stacked'>
        <img src={cardDetails.links.mission_patch} className='w-full object-cover' alt='NO-IMAGE'/>
    
        <div className=' bg-slate-400 self-end mt-2 mx-2 mb-8 p-2 shadow'>
          <h2 className="text-lg">{cardDetails.mission_name}</h2>
          <p className='text-base'>Flight: {cardDetails.flight_number}</p>
          <p className='text-sm pt-1 min-w-48'>{cardDetails.details}</p>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Karta