import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Pagination, Stack } from '@mui/material';
import './styles.css'
import Navbar from './Navbar';
import { TCardDetails, TInfo } from '../@types/types';

const Home: React.FC = () => {
    const [infos, setInfos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const cardsPerPage = 8;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = infos.slice(indexOfFirstCard, indexOfLastCard)
    
    const client = axios.create({
    baseURL: "https://api.spacexdata.com/v3/launches" 
    });

    useEffect(() => {
    client.get('?_limit=10').then((response) => {
      setInfos(response.data);
      
    });
    
  }, []);

  const paginate = (e: any , value: React.SetStateAction<number>) => {
    setCurrentPage(value)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className=" bg-slate-300">
      <Navbar />
    <div className='max-w-7xl m-auto p-8'>
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-x-8'>
      {currentCards.map((info: TInfo, idx: number) => <Cards key={idx} info={info} flight_number={0} links={{
        mission_patch: ''
      }} mission_name={''} details={''} />)}
      </div>

    </div>
    <Stack alignItems="center">
      {infos.length > 8 && (
        <Pagination 
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(infos.length / cardsPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
        />
      )}
    </Stack>
  </div>
  )
}

export default Home