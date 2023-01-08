import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TCardDetails, TInfo } from '../@types/types';

const Card: React.FC<TInfo> = ({info}) => {
    const navigate = useNavigate()

    return (
        <div className='cursor-pointer card stacked' onClick={() => navigate(`/details/${info.flight_number}`)}>
          <img src={info.links.mission_patch} className='card_image w-full object-cover' alt='NO-IMAGE'/>
          <div className='bg-slate-400 self-end mt-2 mx-2 mb-8 p-2 shadow'>
            <h2 className="text-lg">{info.mission_name}</h2>
            <p className='text-base'>Flight: {info.flight_number}</p>
            <p className='text-sm pt-1 w-48 overflow-hidden whitespace-nowrap text-ellipsis'>{info.details}</p>
          </div>
          
        </div>
  )
}

export default Card;