import React from 'react'
import ToDo from '../components/Boards/ToDo';
import TaskCard from '../components/TaskCard/TaskCard';

const Home = () => {
    return (
      <div>
        <TaskCard />
        <ToDo />
      </div>
    );
  }
  
  export default Home