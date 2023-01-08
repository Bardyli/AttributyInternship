import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import InfoRaketa from './InfoRaketa';
import Karta from './Karta';
import axios from 'axios';
import './styles.css'
import Navbar from './Navbar';

const CardDetails: React.FC = () => {
  const [cardDetail, setCardDetail] = useState<any>({})
  const { flight_number } = useParams()

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`);
        setCardDetail(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [flight_number]);
  
  
  
  

  return (
    <>
    <Navbar />
    <div className='parent bg-slate-300'>
      <Karta cardDetails={cardDetail}/>
      <InfoRaketa cardDetails={cardDetail}/>
      <Comment />
    </div>
</>
  )
}

export default CardDetails