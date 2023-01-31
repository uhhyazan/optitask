import React from 'react'
import ToDo from '../components/Boards/ToDo';
import Calendar from '../components/Calendar';
import Completed from '../components/Completed';

const Home = () => {
    return (
      <div className='flex justify-between'>
        <ToDo />
        <Completed />
        <Calendar />
      </div>
    );
  }
  
  export default Home