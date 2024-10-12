import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDispay from '../../components/FoodDisplay/FoodDispay';
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDispay category={category}/>
    </div>
  )
}

export default Home
