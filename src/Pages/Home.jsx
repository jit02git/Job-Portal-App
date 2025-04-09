/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

const Home = () => {
  const [selectedCategory,  setSelectedCategory] = useState(null);
  const [ jobs, setJobs ] = useState([])
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data[0]);
      setJobs(data)
      
    })
  })

  // filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  console.log(filteredItems)

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  );
};

export default Home;
